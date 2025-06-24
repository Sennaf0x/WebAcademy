import { Request, Response, NextFunction } from 'express';
import fs from 'fs/promises';
import path from 'path';

const middleware = (format: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const datetime = new Date().toISOString();
        console.log(`Requisição recebida em: ${datetime}`);

        const logDir = process.env.LOGS_FOLDER || 'logs';
        const logPath = path.join(logDir, 'access.log');

        // Checar e criar o diretório de forma assíncrona
        try {
            await fs.access(logDir);
        } catch (err) {
            console.log(`Diretório ${logDir} não existe. Criando...`);
            await fs.mkdir(logDir, { recursive: true });
        }
        
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

        try {
            await fs.appendFile(logPath, logMessage);
        } catch (err) {
            console.error("Erro ao escrever log:", err);
        }

        next();
    };
};

export default middleware;