class DragDrop {
    #wordList;

    constructor() {
        this.#wordList;
    }

    set setWordList(_wordList) {
        if (isArray(_wordList)) {
            this.#wordList = _wordList
        } else {
            return "erro: parametro deve ser um array";
        }
    }

    get getWordList() {
        return this.#wordList;
    }
}

// variavel de pontuação
let score = 0;
const words = ["abelha", "navio", "vaca"];
const musicGame = new Audio("./music/theme-music.mp3");
const feedbackGame = new Audio("https://audio-previews.elements.envatousercontent.com/files/173295841/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22HL56S7T-bonus-points.mp3%22")

//------------- a função recebe pelo parametro um array com a quantidade de palaras que será inseridas no html. -------------
function createWordList(_word) {
    // ------------- recebe o array com as palavras. -------------
    const wordList = _word;
    musicGame.play
    wordList.forEach(element => {
        //------------- cria o html da linha da palavra -------------
        // ------------- variavel que armazenará o html que será inserido na página.-------------
        let wordHTML = `
        <div class="words">
              <div class="letters-words ui-widget-header drop_${element}" id="${element}"></div>
        `;
        for (let w = 1; w < element.length; w++) {
            // ------------- cria o html das letras da palavra -------------
            wordHTML += `
                <div class="letters-words">
                            <img src="./images/letter-${element[w]}.png" alt="">
                 </div>
                `;
        }
        wordHTML += `<img class="object" src="./images/${element}.png" alt=""></img>`;
        wordHTML += `</div>`;
        //------------- insere a palavra no html. -------------
        $("#words-space").append(wordHTML);
    });
}

createWordList(words);

$(".drag").draggable({
    cursor: "grabbing",
    revert: "invalid",
    snap: ".drop",
    snapMode: "inner",
    snapTolerance: 40
});

words.forEach((elements) => {
    console.log(elements);
    $(`.drop_${elements}`).droppable({
        accept: `.${elements}`,
        // evento que ocorre quando o drag é arrastado
        activate: function (event, ui) {
            // $(this).css("border","1px solid #DCC706")
        },
        // evento que ocorre quando o drag é solto no drop
        drop: function (event, ui) {
            $(this).css("background", "#728C0B");
            $(this).droppable({
                disabled: true
            })

            const pointAudio = new Audio("https://audio-previews.elements.envatousercontent.com/files/151063428/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22NW8FSR4-scoring-a-point.mp3%22");
            score += 30;
            if (score >= 90) {
                score = 100;
                feedbackGame.play();
                scoreUpdate();
                victory();
                return;
            } else {
                pointAudio.play();
                scoreUpdate()
            }
        }
    });
});

function scoreUpdate() {
    $(function () {
        $("#progressbar").progressbar({
            value: score
        });
    });
}

function victory() {
    $("body").append(`
    <div id="feedback-user">
        <div id="result">
            <p>VITÓRIA!!!</p>
             <div id="stars">
                <img src="./images/star.png" width="80px" alt="">
                <img src="./images/star.png" width="80px" alt="">
                 <img src="./images/star.png" width="80px" alt="">
         </div>
         <button id="next">Próxima Fase</button>
 </div>
 <img id="character-feedback" src="./images/character.png" alt="">
</div>
    `);

    $("#character").css("display", "none");
}

scoreUpdate()


const letterAlphabet = "abcdefghijklmnopqrstuvwxyz";
const letterDrag = [];
// amount of drag letter on html
const letterNumberDrag = (words.length * 2);

// create list of drag letters
function createDragLetter(_words) {
    let words = _words;
    let randomLetterPosition;
    let randomLetterQtd = 0;

    do {
        randomLetterPosition = Math.floor(Math.random() * letterNumberDrag);

        if (letterDrag[randomLetterPosition] == undefined && randomLetterQtd < words.length) {
            letterDrag[randomLetterPosition] = words[randomLetterQtd][0];
            randomLetterQtd++
        }

        if (letterDrag[randomLetterPosition] == undefined && randomLetterQtd >= words.length) {
            let letterSelected = letterAlphabet[Math.floor(Math.random() * letterAlphabet.length)];
            if (letterDrag.indexOf(letterSelected) == -1) {
                letterDrag[randomLetterPosition] = letterSelected;
                randomLetterQtd++
            }
        }
    }
    while (randomLetterQtd < letterNumberDrag);
    console.table(letterDrag)

}
createDragLetter(words)
