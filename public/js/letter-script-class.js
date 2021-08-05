export class DragDropClass {
    #wordList;
    #letterTotal;
    #letterExtra;

    constructor() {
        this.#wordList;
        this.#letterTotal;
        this.#letterExtra;
    }

    totalLetter() {
        this.#letterTotal = this.#wordList.length + this.#letterExtra;
    }


    set setWordList(_wordList) {
        if (_wordList != "") {
            this.#wordList = _wordList
        } else {
            return "erro: parametro deve ser um array";
        }
    }


    get getWordList() {
        return this.#wordList;
    }


    set setExtraLetter(_letterExtraValue) {
        if (isNumber(_letterExtraValue)) {
            this.#letterExtra = _letterExtraValue
        } else {
            return "erro: parametro deve ser um 'Number'"
        }
    }


}

