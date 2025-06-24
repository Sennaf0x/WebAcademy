import express from "express";
import { engine } from 'express-handlebars'; // Importando o motor Handlebars
import path from "path";
import dotenv from "dotenv";

import validateEnv from "./utils/validateEnv";
import router from './router/router';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(router);

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});