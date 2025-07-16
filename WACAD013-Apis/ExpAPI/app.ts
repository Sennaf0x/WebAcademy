import express, { Application } from 'express';
import productRouter from './router/product.router';
import cookieParser from 'cookie-parser';
import  setLangCookie  from './middlewares/setLangCookie';
import languageRouter from './language/language.router';


const app: Application = express();

app.use(cookieParser());
app.use(setLangCookie);
app.use(express.json());

app.use('/products', productRouter);
app.use('/language', languageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));