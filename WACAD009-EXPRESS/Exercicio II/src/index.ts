import express, { Request, Response } from "express";
import { engine } from 'express-handlebars';
import path from "path";
import dotenv from "dotenv";
import sass from 'node-sass-middleware';

import validateEnv from "./utils/validateEnv";
import middleware from './middlewares/middleware';
import routes from './router/router';

dotenv.config();
validateEnv();


const app = express();
const PORT = process.env.PORT || 3333;

// Iniciando middlewares

app.use(middleware(process.env.LOGS_FORMAT || 'simples'));

// Iniciando Handlebars

//app.engine("handlebars", engine());
app.engine('handlebars', engine({
 layoutsDir: `${__dirname}/views/layouts`,
 defaultLayout: 'layouts/main',
}))
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// assets
app.use('/img', [
 express.static(`${__dirname}/public/img`)
]);

app.use(sass({
 src: `${__dirname}/../public/scss`,
 dest: `${__dirname}/../public/css`,
 outputStyle: "compressed",
 prefix: "/css",
}));

app.use("/css", express.static(`${__dirname}/../../../public/css`));

//Helpers
app.engine("handlebars", engine({
 helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));

app.use(routes);

// Configuração de PORT

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});