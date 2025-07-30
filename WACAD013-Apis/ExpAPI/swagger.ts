 import swaggerAutogen from "swagger-autogen";
 
 const doc = {
    info: {
        title: "API da Loja virtual",
        description: "Documentação da API",
    },
        host: "localhost:3000",
    };
 const outputFile = "./swagger-output.json";
 const routes = ["./app.ts"];
 swaggerAutogen()(outputFile, routes, doc);