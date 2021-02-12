const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const rotas = require("./src/routes/consultas");

var app = express();

app.use((req, res, next) => {
	
    res.header("Access-Control-Allow-Origin", "*");
    
    res.header("Access-Control-Allow-Headers","*")
	
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    
    app.use(cors());
    
    next();
});

app.use(bodyParser.json());

app.use("/", rotas);


app.listen(4000);