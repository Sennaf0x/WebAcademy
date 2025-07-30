import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import session from 'express-session';

declare module 'express-session' {
    interface SessionData {
        cart?: { productId: number; quantity: number }[];
        uid: string;
    }
}

const prisma = new PrismaClient();

export const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.order.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addToCart = async (req: Request, res: Response): Promise<void> => {
    const { productId, quantity } = req.body;

    try {

        const product = await prisma.product.findUnique({ where: { id: productId } });

        if (!product) {
            res.status(404).json({ msg: 'Produto não encontrado' });
            return;
        }

        if (!req.session.cart) {
            req.session.cart = [];
        }

        const existingProductIndex = req.session.cart.findIndex((item: any) => item.productId === productId);

        if (existingProductIndex > -1) {
            req.session.cart[existingProductIndex].quantity += quantity;
        } else {
            req.session.cart.push({ productId, quantity });
        }

        res.status(200).json({ msg: 'Produto adicionado ao carrinho', cart: req.session.cart });
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export const completePurchase = async (req: Request, res: Response): Promise<void> => {
    if (!req.session.cart || req.session.cart.length === 0) {
        res.status(400).json({ msg: 'Carrinho vazio' });
        return
    }

    let total = 0;
    const items = [];

    try {
        for (const item of req.session.cart) {
            const product = await prisma.product.findUnique({ where: { id: item.productId } });

            if (!product) {
                res.status(404).json({ msg: `Produto com ID ${item.productId} não encontrado` });
                return
            }

            total += product.price * item.quantity;
            items.push({ productId: product.id, quantity: item.quantity });
        }

       
        const order = await prisma.order.create({
            data: {
                userId: String(req.session.uid), 
                total,
                items: JSON.stringify(items)
            }
        });

        req.session.cart = [];
        res.status(201).json({ msg: 'Compra concluída com sucesso', order });
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};