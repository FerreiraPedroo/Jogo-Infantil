//------------- a função recebe pelo parametro um array com a quantidade de palaras que será inseridas no html. -------------
export function createWordList(_word) {
    console.log(_word)
    const words = _word
    //const words = ["abelha", "navio", "vaca"];

    // ------------- receive array with words -------------
    const wordList = words;
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
        //------------- insert words in html. -------------
        $("#words-space").append(wordHTML);
    });
}
export function createDragLetter(_letters) {
    let letters = _letters;
    let letterHTML = "";
    for (let l = 0; l < letters.length; l++) {
        letterHTML += `
        <div class="letters">
            <img class="letters-object drag" src="./images/letter-${letters[l]}.png" alt="">
        </div>
        `;
    }
    //$("#letters-space").append(letterHTML);
    //return letterHTML;
}