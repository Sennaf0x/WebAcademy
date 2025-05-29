"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lorem_1 = __importDefault(require("./routes/lorem"));
const express_handlebars_1 = require("express-handlebars");
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
const middleware_1 = __importDefault(require("./middleware"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.use((0, middleware_1.default)(process.env.LOGS_FORMAT || 'simples'));
app.engine("handlebars", (0, express_handlebars_1.engine)());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get('/lorem/:paragraphs', lorem_1.default);
app.get('/hb1', (req, res) => {
    res.render('hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
        layout: false,
    });
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
