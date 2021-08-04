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

    get getWordList() {
        return this.#wordList;
    }


}



// a função recebe pelo parametro um array com a quantidade de palaras que será inseridas no html.
function createWordList(_word) {
    // recebe o array com as palavras.
    const wordList = _word;

    wordList.forEach(element => {
        //cria o html da linha da palavra
        //variavel que armazenará o html que será inserido na página.
        let wordHTML = `
        <div class="words">
              <div class="letters-words ui-widget-header drop"></div>
        `;
        for (let w = 1; w < element.length; w++) {
            // cria o html das letras da palavra
            wordHTML += `
                <div class="letters-words">
                            <img src="./images/letter-${element[w]}.png" alt="">
                 </div>
                `;
        }
        wordHTML += `<img class="object" src="./images/${element}.png" alt=""></img>`;
        wordHTML += `</div>`;
        // inseri a palavra no html.
        $("#words-space").append(wordHTML);
    });
}


createWordList(["abelha", "navio", "vaca"]);


$(".drag").draggable({
    cursor: "grabbing",
    revert: "invalid",
    snap: ".drop",
    snapMode: "inner",
})

$(".drop").droppable({

})
