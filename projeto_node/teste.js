const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto1', 'root', 'root',{
    host: "localhost",
    dialect: "mysql"
});

// criando a tabela postagem 
const Postagem = sequelize.define('postagens', {
    // Criando campo titulo
    titulo:{
        // O tipo STRING tem limite de caracter
        type: Sequelize.STRING
    },

    // O tipo TEXT é ilimitado no tamanho
    conteudo:{
        type:Sequelize.TEXT
    }
});
//Postagem.sync({force:true});

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },

    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})
// Usuario.sync({force:true});

//INSERINDO OS DADOS NA TABELA USUARIO
Usuario.create({
    nome: "Mario",
    sobrenome:"Jesus",
    idade:"33",
    email:"analista.mario@gmail.com"
});

//then é uma função de callback
//ela é executada quando algum evento acontece
// que é a sequelize.authenticate

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro);
});