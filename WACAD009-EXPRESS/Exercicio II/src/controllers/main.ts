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
            res.render('main/lorem', {
                title:"lorem",
                result: `${result}`,
                layout: 'main'
            })
    }

const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
                        title: "Página Hb1",
                        mensagem: 'Olá, você está na página de HB1!',
                        layout: 'main',
                    });
};

const hb2 = (req: Request, res: Response) => {
    res.render('main/hb2', {
                                title: "Página Hb2",
                                name: 'React',
                                type: 'library',
                                poweredByNode: true,
                                layout: 'main',
                            }
    )};

const hb3 = (req: Request, res: Response) => {
    const profes = [
                        { nome: 'David Fernandes', sala: 1238 },
                        { nome: 'Horácio Fernandes', sala: 1233 },
                        { nome: 'Edleno Moura', sala: 1236 },
                        { nome: 'Elaine Harada', sala: 1231 }
                    ];
    res.render('main/hb3', { profes, title: "Página Hb3", layout: 'main' });
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
    const techListHTML = listTechs(technologies);                                            
    const responseHTML = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Tecnologias com Node.js</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
   
                        </head>
                        <body>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Express</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/hb1">Hb1</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/hb2">Hb2</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/hb3">Hb3</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/hb4">Hb4</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Lorem
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/lorem/1">1</a></li>
                                        <li><a class="dropdown-item" href="/lorem/2">2</a></li>
                                        <li><a class="dropdown-item" href="/lorem/3">3</a></li>
                                    </ul>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                </div>
                            </div>
                        </nav>

                        <div class='container'>
                            <h1>Tecnologias Desenvolvidas com Node.js</h1>
                            ${techListHTML}
                        </div>
                        <footer>
                        <p>© 2023 Meu Aplicativo. Todos os direitos reservados.</p>
                        </footer>
                        </body>
                        </html>`;
                        
                        res.send(responseHTML);
}

export default { index, hb1, hb2, hb3, hb4, lorem };