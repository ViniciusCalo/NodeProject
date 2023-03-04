var http = require ("http");
http.createServer(function (req, res){
    res.end("Vai Flamengo");
}).listen(8081);
console.log("Servidor Rodando!");