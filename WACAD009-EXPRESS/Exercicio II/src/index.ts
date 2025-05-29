import express, { Request, Response } from "express";
import loremRouter from './routes/lorem';

import validateEnv from "./utils/validateEnv";
import dotenv from "dotenv";
import middleware from './middleware';

dotenv.config();
validateEnv();


const app = express();
const PORT = process.env.PORT || 3333;

app.use(middleware(process.env.LOGS_FORMAT || 'simples'));

app.get("/", (req: Request, res: Response) => {
 res.send("Hello world!");
});

app.get('/lorem/:paragraphs', loremRouter);


app.listen(PORT, () => {
 console.log(`Express app iniciada na porta ${PORT}.`);
});