import express from 'express';
import productRouter from './router/product.router.js';

const app = express();

app.use(express.json());
app.use('/', productRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});