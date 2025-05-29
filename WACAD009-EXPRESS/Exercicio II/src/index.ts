import express, { Request, Response } from "express";
import loremRouter from './routes/lorem';
import { engine } from 'express-handlebars';
import path from "path";


import validateEnv from "./utils/validateEnv";
import dotenv from "dotenv";
import middleware from './middleware';
import { listTechs } from './views/helpers/helpers';

dotenv.config();
validateEnv();


const app = express();
const PORT = process.env.PORT || 3333;

// Iniciando middlewares

app.use(middleware(process.env.LOGS_FORMAT || 'simples'));

// Iniciando Handlebars

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

//Helpers
app.engine("handlebars", engine({
 helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));

// Página inicial

app.get("/", (req: Request, res: Response) => {
 res.send("Hello world!");
});

//Router

app.get('/lorem/:paragraphs', loremRouter);

//handlebars

app.get('/hb1', (req, res) => {
 res.render('hb1', {
                        mensagem: 'Olá, você está na página de HB1!',
                        layout: false,
                    });
});

app.get('/hb2', (req, res) => {
    res.render('hb2', {
                        poweredByNodejs: true,
                        name: 'Express',
                        type: 'Framework',
                        layout: false,
                        });
});

app.get('/hb3', (req, res) => {
        const profes = [
                        { nome: 'David Fernandes', sala: 1238 },
                        { nome: 'Horácio Fernandes', sala: 1233 },
                        { nome: 'Edleno Moura', sala: 1236 },
                        { nome: 'Elaine Harada', sala: 1231 }
                        ];
        res.render('hb3', { profes, layout: false });
});

app.get('/hb4', function (req, res) {
        const technologies = [
                                { name: 'Express', type: 'Framework', poweredByNodejs: true },
                                { name: 'Laravel', type: 'Framework', poweredByNodejs: true },
                                { name: 'React', type: 'Library', poweredByNodejs: true },
                                { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
                                { name: 'Django', type: 'Framework', poweredByNodejs: false },
                                { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
                                { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
                            ];
    
            // Usa o helper para gerar a lista de tecnologias
            const techListHTML = listTechs(technologies);

            // Monta a resposta HTML
            const responseHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tecnologias com Node.js</title>
            </head>
            <body>
                <div class='container'>
                    <h1>Tecnologias Desenvolvidas com Node.js</h1>
                    ${techListHTML} <!-- Insere a lista de tecnologias aqui -->
                </div>
            </body>
            </html>`;

            res.send(responseHTML);

});


// Configuração de PORT

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});