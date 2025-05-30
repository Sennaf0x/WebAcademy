import { Request, Response } from 'express';
import { listTechs } from "../views/helpers/helpers";

const index = (req: Request, res: Response) => {
 res.end('Welcome to Web academy!');
};

const lorem = (req: Request, res: Response) => {
            
            const loremIpsum = (numParagraphs: number): string => {
            const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.";
            return Array(numParagraphs).fill(paragraph).join("\n\n");
            };
            
            const numParagraphs = parseInt(req.params.paragraphs as string) || 1;
            const result = loremIpsum(numParagraphs);
            res.send(result);
    }

const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
                        mensagem: 'Olá, você está na página de HB1!',
                        layout: false,
                    });
};

const hb2 = (req: Request, res: Response) => {
    res.render('main/hb2', {
                        name: 'React',
                        type: 'library',
                        poweredByNode: true,
                        layout: false,
                        });
};

const hb3 = (req: Request, res: Response) => {
    const profes = [
                        { nome: 'David Fernandes', sala: 1238 },
                        { nome: 'Horácio Fernandes', sala: 1233 },
                        { nome: 'Edleno Moura', sala: 1236 },
                        { nome: 'Elaine Harada', sala: 1231 }
                    ];
    res.render('main/hb3', { profes, layout: false });
}

const hb4 = (req: Request, res: Response) => {
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
}

export default { index, hb1, hb2, hb3, hb4, lorem };