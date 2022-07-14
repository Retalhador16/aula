const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});

const herois = ["Batman", "Tony Stark", "Hulk", "Miranha"];

app.get("/herois", function (req, res) {
    res.send(herois);
});

app.listen(3000, function(){
    console.log("Rodando em localhost:3000")
});