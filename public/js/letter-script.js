//------------- a função recebe pelo parametro um array com a quantidade de palaras que será inseridas no html. -------------
export function createWordList(_word) {
    // console.log(_word)
    const words = _word
    //const words = ["abelha", "navio", "vaca"];

    // ------------- receive array with words -------------
    const wordList = words;
    wordList.forEach(element => {
        //------------- cria o html da linha da palavra -------------
        // ------------- variavel que armazenará o html que será inserido na página.-------------
        let wordHTML = `
        <div class="words">
              <div element="${element}" class="letters-words ui-widget-header drop_${element}" id="${element}"></div>
        `;
        for (let w = 1; w < element.length; w++) {
            // ------------- cria o html das letras da palavra -------------
            wordHTML += `
                <div class="letters-words">
                            <img element="${element}" src="./images/letter-${element[w]}.png" alt="">
                 </div>
                `;
        }
        wordHTML += `<img class="object" src="./images/${element}.png" alt=""></img>`;
        wordHTML += `</div>`;
        //------------- insert words in html. -------------
        $("#words-space").append(wordHTML);
    });
}

export function createDragLetter(_letters, _names) {
    let letters = _letters;
    console.log(_letters);
    console.log(_names);
    let letterHTML = "";
    for (let l = 0; l < letters.length; l++) {
        if (l == 1) {
            letterHTML += `
        <div class="letters-middle">
            <img element="${_names[l]}" class="letters-object drag ${_names[l]}" src="./images/letter-${letters[l]}.png" alt="">
        </div>
        `;
        } else {
            letterHTML += `
        <div class="letters">
            <img element="${_names[l]}" class="letters-object drag ${_names[l]}" src="./images/letter-${letters[l]}.png" alt="">
        </div>
        `;
        }
        console.log(l+ " " +letters[l] + " de " + _names[l]);
        // console.log(_names[l]);
    }
    $("#letters-space").append(letterHTML);
    //return letterHTML;
}

export function createdAnimal(_animals) {
    const animals = _animals;
    let beginning = Math.floor((Math.random() * 10));

    for (beginning; beginning < (beginning + 7); beginning++) {
        if (beginning > animals.length) {
            beginning = 0;
        }
        $("figures").append(`
        <div class="figures-animals">
                <img element="${animals[beginning]}" class="drag ${animals[beginning]}" src="./images/${animals[beginning]}.png" />
        </div>
        `)
    }
}