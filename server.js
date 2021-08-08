const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const { resolve } = require('path');
const PORT = 80;
let playerData;
let playersList;
let user = {}
let dataUser = [];

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

app.post("/playersearch", (req, res) => {
    user.name = req.body.name;
    fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
        if (err) throw err
        verifyUser(data)
    });

    function verifyUser(_data) {
        dataUser = JSON.parse(_data)
        userData = dataUser.filter((player) => { return player.name == user.name; });
        if (userData.length == 0) { userData = false }
        res.send(userData)
    }
})

app.post('/score', (req, res) => {
    playerData = {
        name: req.body.name,
        score: req.body.score,
        phase: req.body.phase
    }

    fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
        if (err) throw err
        playersList = JSON.parse(data);
        writeTheFileData(playersList);
    });
    res.send("ENVIADO")

});

function writeTheFileData(_data) {
    playerData.id = (_data.length + 1);
    let list = _data
    list.push(playerData)

    fs.writeFile("./data/players-data.json", `${JSON.stringify(list)}`, () => {
        console.log("valor na escrita");
        console.log(list);
    });
}

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});




