"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const middleware = (format) => {
    console.log("Iniciando middleware");
    return (req, res, next) => {
        console.log("Até aqui tudo bem");
        const datetime = new Date().toISOString();
        const logDir = process.env.LOGS_FOLDER || 'logs';
        const logPath = path_1.default.join(process.env.LOGS_FOLDER || 'logs', 'access.log');
        if (!fs_1.default.existsSync(logDir)) {
            fs_1.default.mkdirSync(logDir, { recursive: true }); // Cria o diretório e qualquer diretório pai necessário
        }
        if (format === 'simples') {
            const logMessage = `${datetime} - ${req.method} ${req.url}\n`;
            console.log("Alteração simples realizada");
            fs_1.default.appendFileSync(logPath, logMessage);
        }
        else if (format === 'completo') {
            const logMessage = `${datetime} - ${req.method} ${req.url} - HTTP/${req.httpVersion} - ${req.headers['user-agent']}\n`;
            fs_1.default.appendFileSync(logPath, logMessage);
        }
        next();
    };
};
exports.default = middleware;
