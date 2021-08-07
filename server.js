const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const PORT = 8080;
let playerData;
let playersList;
let list = [];

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



app.post('/score',  (req, res) => {
    playerData = {
        name : req.body.name,
        score : req.body
    }
    playerData.name = req.body.name;
    playerData.score = req.body.score;

     fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
        if (err) throw err
        playersList = JSON.parse(data);
        writeTheFileData(playersList);
    });


    // fs.writeFile("./data/players-data.json", `${JSON.stringify(data)}`, () => {
    //     console.log("valor na escrita");
    //     console.log(data);
    // });

    // let dataPlayer = data.filter(user => { return user.id == playerData.id });
    // if(users){
    //     dataPlayer = data.filter(user => { return user.id != playerData.id });
    // }

    // data == undefined ? playerData.id = (users.length + 1) : ()=>{
    // }

    res.send("ENVIADO")

});

function writeTheFileData(_data){
    playerData.id = (_data.length + 1);
    list = _data.push(playerData);
    console.log(list);
    // retorna 3, n made sentence
    
    // fs.writeFile("./data/players-data.json", `${JSON.stringify(list)}`, () => {
    //     console.log("valor na escrita");
    //     console.log(list);
    // });
}

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});




