"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const middleware = (format) => {
    return (req, res, next) => {
        const datetime = new Date().toISOString(); // Captura a data e a hora atual
        console.log(`Requisição recebida em: ${datetime}`); // Log no console para cada requisição
        const logDir = process.env.LOGS_FOLDER || 'logs';
        const logPath = path_1.default.join(logDir, 'access.log');
        // Verifique se o diretório de logs existe, se não, crie-o
        if (!fs_1.default.existsSync(logDir)) {
            console.log(`Diretório ${logDir} não existe. Criando...`);
            fs_1.default.mkdirSync(logDir, { recursive: true });
        }
        // Criação da mensagem de log com base no formato
        let logMessage;
        if (format === 'simples') {
            logMessage = `${datetime} - ${req.method} ${req.url}\n`;
            console.log("Log simples: " + logMessage);
        }
        else if (format === 'completo') {
            logMessage = `${datetime} - ${req.method} ${req.url} - HTTP/${req.httpVersion} - ${req.headers['user-agent']}\n`;
            console.log("Log completo: " + logMessage);
        }
        else {
            console.log("Formato de log desconhecido. Nenhum log escrito.");
            return next();
        }
        // Escreve a mensagem de log no arquivo
        fs_1.default.appendFileSync(logPath, logMessage);
        // Chama o próximo middleware ou o manipulador de rota
        next();
    };
};
exports.default = middleware;
