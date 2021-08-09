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

    // function writeTheFileData(_data) {
    //     playerData.id = (_data.length + 1);
    //     let list = _data
    //     list.push(playerData)

    //     fs.writeFile("./data/players-data.json", `${JSON.stringify(list)}`, () => {
    //         console.log("valor na escrita");
    //         console.log(list);
    //     });
    // }

    // fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
    //     if (err) throw err
    //     playersList = JSON.parse(data);
    //     writeTheFileData(playersList);
    // });

    // res.send("ENVIADO")

    new Promise((resolve, reject) => {
        console.log("| Start SCORE")

        fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
            if (err) {
                console.log("| ERRO: " + err);
                reject();
            } else {
                console.log("| ReadFile: './data/players-data.json' - OK");
                playersList = JSON.parse(data);
                let userListJSONPosition = 0;

                for (u in playersList) {
                    if (playersList[u].name == playerData.name) {
                        console.log("| Usuario encontrado: " + JSON.stringify(playersList[u]));
                        playersList[u].score = playerData.score;
                        playersList[u].phase = playerData.phase;
                        console.log("| Dados do usuario alterado : " + JSON.stringify(playersList[u]));
                        resolve(playersList)
                        break;
                    }
                    userListJSONPosition++
                };

                if (userListJSONPosition == playersList.length) {
                    playerData.id = playersList[playersList.length - 1].id + 1;
                    playersList.push(playerData);
                    console.log("| Usuario: ", playerData);
                    console.log("| Novo usuário");
                    resolve(playersList)
                }
            }
        })

    }).then((_data) => {
        fs.writeFile('./data/players-data.json', JSON.stringify(_data), (err) => {
            if (err) {
                console.log("| ERRO: " + err);
                reject();
            } else {
                console.log("| ATUALIZADO: ", _data)
                console.log("| SCORE OK - FIM");
                res.send({ "SCORE": "OK" });
            }
        })
    }).catch(() => {
        console.log("| ERRO - FIM");
        res.send({ "ERRO": "NÃO FOI POSSIVEL SALVAR O SCORE" })
    })
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});




