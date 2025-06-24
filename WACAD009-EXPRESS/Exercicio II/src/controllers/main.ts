import { Request, Response } from 'express';
import { listTechs } from "../views/helpers/helpers";

const index = (req: Request, res: Response) => {
    res.render('main/index', {
        title: "Página Inicial",
        mensagem:"Welcome to Web Academy",
        layout: 'main'
    });
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
    console.log(techListHTML)                                           
    res.render('main/hb4', {
                        techListHTML,
                        title: "Página hb4",
                        layout: 'main'
                    })
                        
    //res.send(responseHTML);
}

export default { index, hb1, hb2, hb3, hb4, lorem };