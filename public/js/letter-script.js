const words = ["abelha", "navio", "vaca"];
const letterAlphabet = "abcdefghijklmnopqrstuvwxyz";
const letterDrag = [];
// amount of drag letter on html
const letterNumberDrag = (words.length * 2);


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
createWordList(words);