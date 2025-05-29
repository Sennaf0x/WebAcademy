import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const middleware = (format: string) => {

    console.log("Iniciando middleware");
    console.log(process.env.LOGS_FOLDER);
    console.log(format);
    
    return (req: Request, res: Response, next: NextFunction) => {
        const datetime = new Date().toISOString(); // Captura a data e a hora atual
        console.log(`Requisição recebida em: ${datetime}`); // Log no console para cada requisição

        const logDir = process.env.LOGS_FOLDER || 'logs'; 
        const logPath = path.join(logDir, 'access.log');

        // Verifique se o diretório de logs existe, se não, crie-o
        if (!fs.existsSync(logDir)) {
            console.log(`Diretório ${logDir} não existe. Criando...`);
            fs.mkdirSync(logDir, { recursive: true });
        }

        // Criação da mensagem de log com base no formato
        let logMessage: string;
        if (format === 'simples') {
            logMessage = `${datetime} - ${req.method} ${req.url}\n`;
            console.log("Log simples: " + logMessage);
        } else if (format === 'completo') {
            logMessage = `${datetime} - ${req.method} ${req.url} - HTTP/${req.httpVersion} - ${req.headers['user-agent']}\n`;
            console.log("Log completo: " + logMessage);
        } else {
            console.log("Formato de log desconhecido. Nenhum log escrito.");
            return next();
        }

        // Escreve a mensagem de log no arquivo
        fs.appendFileSync(logPath, logMessage);
        
        // Chama o próximo middleware ou o manipulador de rota
        next();
    };
};

export default middleware;