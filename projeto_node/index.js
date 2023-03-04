const express = require ("express");
const app = express();

//criando as rotas
//pagina principal

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!");
});

app.get("/sobre", function(req,res){
    res.send("<h1> Minha pagina sobre! </h1>");
});

app.get("/forum", function (req,res){
    res.send("Meu fórum!");
});

app.get("/ola/:nome/:cargo/:situacao", function (req,res){
    res.send("<h1> Ola "+ req.params.nome +"</h1>"
    + "<h2> Seu cargo e:  "+ req.params.cargo +"</h2>"
    + "<h3> Sua situacao e:  "+ req.params.situacao +"</h3>"
    )
});


app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081");
})
