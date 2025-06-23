"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("./generated/prisma");
var prisma = new prisma_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var categorias, subcategorias, i, categoria, j, subcat, produtos, numerosSerie, i, categoria, subcategoria, produto, k, numSerie, i, cpf, cliente, enderecoEnvio, compra;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    categorias = [];
                    subcategorias = [];
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i <= 3)) return [3 /*break*/, 7];
                    return [4 /*yield*/, prisma.categoria.create({
                            data: {
                                nome: "Categoria ".concat(i)
                            }
                        })];
                case 2:
                    categoria = _a.sent();
                    categorias.push(categoria);
                    j = 1;
                    _a.label = 3;
                case 3:
                    if (!(j <= 2)) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.subCategoria.create({
                            data: {
                                nome: "Subcategoria ".concat(i, ".").concat(j),
                                id_categoria: categoria.id
                            }
                        })];
                case 4:
                    subcat = _a.sent();
                    subcategorias.push(subcat);
                    _a.label = 5;
                case 5:
                    j++;
                    return [3 /*break*/, 3];
                case 6:
                    i++;
                    return [3 /*break*/, 1];
                case 7:
                    produtos = [];
                    numerosSerie = [];
                    i = 1;
                    _a.label = 8;
                case 8:
                    if (!(i <= 5)) return [3 /*break*/, 14];
                    categoria = categorias[i % categorias.length];
                    subcategoria = subcategorias[i % subcategorias.length];
                    return [4 /*yield*/, prisma.produto.create({
                            data: {
                                modelo: "Produto Modelo ".concat(i),
                                fabricante: "Fabricante ".concat(i),
                                preco_base: new prisma_1.Prisma.Decimal(10.0 * i),
                                quantidade: 50 + i,
                                id_categoria: categoria.id,
                                id_subcategoria: subcategoria.id,
                            }
                        })];
                case 9:
                    produto = _a.sent();
                    produtos.push(produto);
                    k = 1;
                    _a.label = 10;
                case 10:
                    if (!(k <= 2)) return [3 /*break*/, 13];
                    return [4 /*yield*/, prisma.numeroSerie.create({
                            data: {
                                num_serie: "SERIE".concat(i, "-").concat(k),
                                id_produto: produto.id
                            }
                        })];
                case 11:
                    numSerie = _a.sent();
                    numerosSerie.push(numSerie);
                    _a.label = 12;
                case 12:
                    k++;
                    return [3 /*break*/, 10];
                case 13:
                    i++;
                    return [3 /*break*/, 8];
                case 14:
                    i = 1;
                    _a.label = 15;
                case 15:
                    if (!(i <= 10)) return [3 /*break*/, 19];
                    cpf = "".concat(100000000 + i);
                    return [4 /*yield*/, prisma.cliente.create({
                            data: {
                                cpf: cpf,
                                nome: "Cliente ".concat(i),
                                email: "cliente".concat(i, "@email.com"),
                                data_nascimento: new Date("199".concat(i % 10, "-01-01")),
                                celular: "319999000".concat(i),
                                enderecos: {
                                    create: [{
                                            logradouro: "Rua X".concat(i),
                                            numero: "".concat(i),
                                            bairro: "Centro",
                                            cidade: "Cidade ".concat(i),
                                            uf: "MG",
                                            cep: "30000-00".concat(i)
                                        }]
                                }
                            },
                            include: { enderecos: true }
                        })
                        // Pega o id do endereço criado para usar na compra
                    ];
                case 16:
                    cliente = _a.sent();
                    enderecoEnvio = cliente.enderecos[0];
                    return [4 /*yield*/, prisma.compra.create({
                            data: {
                                cpf_cliente: cpf,
                                endereco_envio: enderecoEnvio.id,
                                data_hora: new Date(),
                                desconto: new prisma_1.Prisma.Decimal(i),
                                forma_pagamento: i % 2 === 0 ? "PIX" : "Cartão",
                                total: new prisma_1.Prisma.Decimal(100.0 + i),
                                itens: {
                                    create: [
                                        {
                                            id_produto: produtos[i % produtos.length].id,
                                            quantidade: 1,
                                            preco_unitario: produtos[i % produtos.length].preco_base
                                        },
                                        {
                                            id_produto: produtos[(i + 1) % produtos.length].id,
                                            quantidade: 2,
                                            preco_unitario: produtos[(i + 1) % produtos.length].preco_base
                                        }
                                    ]
                                }
                            }
                        })];
                case 17:
                    compra = _a.sent();
                    console.log("Cliente ".concat(i, " criado, compra:"), compra.id);
                    _a.label = 18;
                case 18:
                    i++;
                    return [3 /*break*/, 15];
                case 19:
                    console.log("Processo concluído!");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
