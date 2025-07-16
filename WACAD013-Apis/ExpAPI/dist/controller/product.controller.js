"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.read = exports.create = exports.index = void 0;
const client_1 = require("@prisma/client");
const product_schema_1 = require("../schemas/product.schema");
const prisma = new client_1.PrismaClient();
const index = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.index = index;
const create = async (req, res) => {
    const { error } = product_schema_1.productSchema.validate(req.body);
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
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.create = create;
const read = async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.read = read;
const update = async (req, res) => {
    const id = Number(req.params.id);
    const { error } = product_schema_1.productSchema.validate(req.body);
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
    }
    catch (error) {
        if (error.code === 'P2025') {
            res.status(404).json({ message: 'Product not found' });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
exports.update = update;
const remove = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ message: 'Invalid product id' });
        return;
    }
    try {
        await prisma.product.delete({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        if (error.code === 'P2025') {
            res.status(404).json({ message: 'Product not found' });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
exports.remove = remove;
