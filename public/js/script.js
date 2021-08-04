// $(document).ready(() => {
//     $(function () {
//         $(".draggable").draggable();
//         $("#droppable").droppable({
//             drop: function (event, ui) {
//                 $(this)
//                     .addClass("ui-state-highlight")
//                     .find(".letters-words-none")
//                     .html("Dropped!");
//             }
//         });
//     });

// });






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

    get getWordList(){
        return this.#wordList;
    }


}



// a função recebe pelo parametro um array com a quantidade de palaras que será inseridas no html.
function createWordList(_word) {
    // recebe o array com as palavras.
    let wordList = _word;
    // variavel que armazenará o html que será inserido na página.
    let wordHTML = "";

    //cria o html da linha da palavra
    for (let l = 0; l < wordList.length - 1; l++) {
        wordHTML += `<div id="line-${l} class="list-words>`
        wordHTML += `<div class="drop">------</div>`
        // cria o html das letras da palavra
        for (let w = 1; w < wordList[l].length; w++) {
            wordHTML += `<div><img src="./images/letter-${wordList[l][w]}.png"></div>`
        }
        wordHTML += `</div>`

    }
    // inseri a palavra no html.
    document.getElementById("list").innerHTML = wordHTML;

}


createWordList(["vaca", "bolha", "hilo", "bola", "abelha", "beco"]);


$(".drag").draggable({
    cursor: "grabbing",
    revert: "invalid",
    snap: ".drop",
    snapMode: "inner",
})

$(".drop").droppable({

})
