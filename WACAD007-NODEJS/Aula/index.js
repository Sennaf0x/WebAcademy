const http = require("http");
const fs = require('fs');
const dotenv = require("dotenv");

/*fs.readdir("path", (err, files)=>{
    files.forEach
})*/ 

dotenv.config()

const PORT = process.env.PORT
//console.log(process.env)

const server = http.createServer((req,res) => {

    res.writeHead(200, { "content-type": "text/html;charset=utf8"})
    res.write("Web Academy")
    res.write("Web Academy")
    res.write("Web Academy")
    res.write("Web Academy")
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Sevidor rodando na porta ${PORT}`)
});