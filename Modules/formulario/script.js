import  express  from "express";
const app =  express();
import handlebars from "express-handlebars";
import { Sequelize } from "sequelize";

//Config

//template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

// //Conexão com banco de dados MySQL
// const sequelize = new Sequelize('test', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });


//Rotas

app.get("/", (req, res) => {
    res.send('estou pronto para receber as configurações para download')
});
//render serve para carregar o arquivo no rota
//so funcionou o render com a extensão handlebars completa;

app.get("/formulario", (req, res) => {
    res.render("form.handlebars");
})
//iniciar um servidor
app.listen(8082, () => {
    console.log("\n**********\n\nServidor rodando na url http://localhost:8082\n\n**********");
});