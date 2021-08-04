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
let punctuation = 0;
const words = ["abelha", "navio", "vaca"];
const feedbackGame = new Audio("https://audio-previews.elements.envatousercontent.com/files/173295841/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22HL56S7T-bonus-points.mp3%22")

//------------- a função recebe pelo parametro um array com a quantidade de palaras que será inseridas no html. -------------
function createWordList(_word) {
    // ------------- recebe o array com as palavras. -------------
    const wordList = _word;

    wordList.forEach(element => {
        //------------- cria o html da linha da palavra -------------
        // ------------- variavel que armazenará o html que será inserido na página.-------------
        let wordHTML = `
        <div class="words">
              <div class="letters-words ui-widget-header drop" id="${element}"></div>
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

// const point = new Audio("https://audio-previews.elements.envatousercontent.com/files/151063428/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22NW8FSR4-scoring-a-point.mp3%22");
$(".drop").droppable({
    // evento que ocorre quando o drag é arrastado
    activate: function (event, ui) {
        // $(this).css("border","1px solid #DCC706")
    },
    // evento que ocorre quando o drag é solto no drop
    drop: function (event, ui) {
        $(this).css("background", "#728C0B");
        const point = new Audio("https://audio-previews.elements.envatousercontent.com/files/151063428/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22NW8FSR4-scoring-a-point.mp3%22");
        punctuation++
        if (punctuation >= 3) {
            feedbackGame.play()
            return
        } else {
            point.play();
            console.log(punctuation);
        }
    }
});

