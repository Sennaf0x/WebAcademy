import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { productSchema } from '../schemas/product.schema';

const prisma = new PrismaClient();

export const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  const { error } = productSchema.validate(req.body);
  
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  const { name, price } = req.body;

  if (!name || price === undefined) {
    res.status(400).json({ message: 'Name and price are required' });
    return;
  }
  try {
    const product = await prisma.product.create({ data: { name, price: parseFloat(price) } });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const read = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ message: 'Invalid product id' });
    return;
  }
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);

  const { error } = productSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  const { name, price } = req.body;

  if (isNaN(id)) {
    res.status(400).json({ message: 'Invalid product id' });
    return;
  }
  try {
    const product = await prisma.product.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(price !== undefined && { price: parseFloat(price) }),
      },
    });
    res.json(product);
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ message: 'Invalid product id' });
    return;
  }
  try {
    await prisma.product.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};