import express, { Application } from 'express';
import productRouter from './router/product.router';
import cookieParser from 'cookie-parser';
import setLangCookie  from './middlewares/setLangCookie';
import languageRouter from './language/language.router';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import userRouter from './router/user.router';


const app: Application = express();

app.use(session({
 genid: (req) => uuidv4(),
 secret: 'Hi9Cf#mK98',
 resave: true,
 saveUninitialized: true
}));

app.use(cookieParser());
app.use(setLangCookie);
app.use(express.json());

app.use('/products', productRouter);
app.use('/language', languageRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));