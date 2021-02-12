const express = require("express");
const router = express.Router();
const connection = require("../../connectionsql");
const Mensagem = require("../models/mensagem")


router.get("/produtos", (req, res) => {
   connection.query("SELECT * FROM produtos", (err, results) => {
        if (!err) {
            res.json(results);
        } else {
            console.log(err);
        }
    });
})

router.get("/pedidos", (req, res) => {
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

router.post('/mensagem', async (req, res) => {
    const { nome, msg } = req.body;
    res.json(await Mensagem.create({ nome, msg }));
  })


router.get('/mensagem', async (req, res) => {
    res.json(await Mensagem.find());
  });

module.exports = router;