import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../../data/db.json');

// Interface para produtos
interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

// Função auxiliar para ler os dados do arquivo
const readData = (): Product[] => {
    if (!fs.existsSync(dbPath)) {
        throw new Error('db.json does not exist');
    }

    const data = fs.readFileSync(dbPath, 'utf8');
    let productsObj;

    try {
        productsObj = JSON.parse(data);

        // Acesse o array de produtos dentro do objeto
        if (!Array.isArray(productsObj.products)) {
            throw new Error('Data in db.json is not an array');
        }
    } catch (error) {
        throw new Error('Error parsing JSON data: ' + error);
    }
    
    return productsObj.products; // Retorna apenas o array de produtos
};

// Função auxiliar para salvar os dados no arquivo
const saveData = (products: Product[]) => {
    fs.writeFileSync(dbPath, JSON.stringify(products, null, 2), 'utf8');
};

async function index(req: Request, res: Response) {
    const products = readData();
    res.render('product/list', { products, layout: 'main' });
}

async function create(req: Request, res: Response) {
    if (req.method === 'GET') {
        res.render('product/create', { layout: 'main' });
    } else {
        const products = readData();
        const newProduct: Product = {
            id: products.length ? products[products.length - 1].id + 1 : 1,
            name: req.body.name,
            price: parseFloat(req.body.price),
            stock: parseInt(req.body.stock)
        };
        products.push(newProduct);
        saveData(products);
        res.redirect('/product');
    }
}

async function read(req: Request, res: Response) {
    const products = readData();
    const { id } = req.params;
    const product = products.find((p: Product) => p.id === parseInt(id));

    if (product) {
        res.render('product/read', { product, layout: 'main' });
    } else {
        res.status(404).send('Product not found');
    }
}

async function update(req: Request, res: Response) {
    const products = readData();
    const { id } = req.params;
    const productIndex = products.findIndex((p: Product) => p.id === parseInt(id));

    if (req.method === 'GET') {
        if (productIndex !== -1) {
            const product = products[productIndex];
            res.render('product/edit', { product, layout: 'main' });
        } else {
            res.status(404).send('Product not found');
        }
    } else {
        if (productIndex !== -1) {
            products[productIndex] = {
                id: parseInt(id),
                name: req.body.name,
                price: parseFloat(req.body.price),
                stock: parseInt(req.body.stock)
            };
            saveData(products);
            res.redirect('/product');
        } else {
            res.status(404).send('Product not found');
        }
    }
}

async function remove(req: Request, res: Response) {
    const products = readData();
    const { id } = req.params;
    const filteredProducts = products.filter((p: Product) => p.id !== parseInt(id));

    saveData(filteredProducts);
    res.redirect('/product');
}

export default { index, read, create, update, remove };