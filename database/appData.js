const express = require('express');
const mysql = require('mysql2');
const connect = require('./config');


//Creating express object 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//inserir dados
app.post('/Cadastro', (req, res) =>{
res.setHeader("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
return connect.execSQLQuery("insert into cliente (email, senha) value('"+req.body.email+"', '"+req.body.senha+"')", res);
})

//Port Number
const PORT = process.env.PORT || 5000;

//Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
