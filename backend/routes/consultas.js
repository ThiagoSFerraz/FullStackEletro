const express = require("express");
const Router = express.Router();
const connection = require("../connection");


Router.get("/produtos", (req, res) => {
   connection.query("SELECT * FROM produtos", (err, results) => {
        if (!err) {
            res.json(results);
        } else {
            console.log(err);
        }
    });
})

Router.get("/pedidos", (req, res) => {
    connection.query(`SELECT 
    p.quantidade,
    c.nome_cliente,
    pr.Descricao,
    pr.preco
    FROM cliente c
    JOIN pedidos p on c.id_cliente = p.id_cliente
    JOIN produtos pr on pr.id_produto = p.id_produto;`,
    
    (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})

module.exports = Router;