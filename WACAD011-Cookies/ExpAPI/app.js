import express from 'express';
import productRouter from './router/product.router.js';

const app = express();
app.use(express.json());

app.use('/products', productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));