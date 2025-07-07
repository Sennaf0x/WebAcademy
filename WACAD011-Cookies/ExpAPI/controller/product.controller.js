import { PrismaClient } from '@prisma/client';
import { productSchema } from '../schemas/product.schema.js';

const prisma = new PrismaClient();

export const index = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const create = async (req, res) => {
  
  //validação para criar o produto
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Após validar os dados
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  try {
    const product = await prisma.product.create({ data: { name, price: parseFloat(price) } });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const read = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid product id' });
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const update = async (req, res) => {
  const id = Number(req.params.id);

  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { name, price } = req.body;
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid product id' });
  try {
    const product = await prisma.product.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(price !== undefined && { price: parseFloat(price) }),
      },
    });
    res.json(product);
  } catch (error) {
    if (error.code === 'P2025') { 
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export const remove = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid product id' });
  try {
    await prisma.product.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};