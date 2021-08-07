const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const PORT = 8080;
let playerData;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res, next) => {

    const options = {
       root: path.join(__dirname + '/public/')
    };

    res.sendFile('index.html', options, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });
});

app.post('/score', (req, res) => {
    playerData = req.body;
    res.send("ENVIADO")

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});




