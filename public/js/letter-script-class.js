export class DragDropClass {
    #wordList;
    #letterAlphabet;

    #wordListQtd;
    #letterExtra;
    #letterTotal;

    #wordListSelected;
    #letterListSelected;

    constructor() {
        this.#wordList = [];
        this.#letterAlphabet = "abcdefghijklmnopqrstuvwxyz";

        this.#wordListQtd = 0;
        this.#letterExtra = 0;
        this.#letterTotal = 0;

        this.#wordListSelected = [];
        this.#letterListSelected = [];

    }

    // return random letterlist(Array), no repeat letter
    randomLetterList() {
        let randomLetterPosition;
        let randomLetterQtd = 0;
        do {
            randomLetterPosition = Math.floor(Math.random() * this.#letterTotal);
            if (this.#letterListSelected[randomLetterPosition] == undefined && randomLetterQtd < this.#wordListQtd) {
                this.#letterListSelected[randomLetterPosition] = this.#wordListSelected[randomLetterQtd][0];
                randomLetterQtd++
                console.log("(3 <) Pos: ", randomLetterPosition, "LS: ", this.#letterListSelected[randomLetterPosition]);
            }
            if (this.#letterListSelected[randomLetterPosition] == undefined && randomLetterQtd >= this.#wordListQtd) {
                let letterSelected = this.#letterAlphabet[Math.floor(Math.random() * this.#letterAlphabet.length)];
                if (this.#letterListSelected.indexOf(letterSelected) == -1) {
                    this.#letterListSelected[randomLetterPosition] = letterSelected;
                    randomLetterQtd++
                    console.log("(3 >=) Pos: ", randomLetterPosition, "LS: ", this.#letterListSelected[randomLetterPosition]);
                }
            }
        }
        while (randomLetterQtd < this.#letterTotal);
        return this.#letterListSelected;
    }
    // return random wordlist(Array), no repeat word
    randomWordListSelect() {
        let randomWordPosition;
        let randomWordQtd = 0;
        //let wordSelected;
        do {
            randomWordPosition = Math.floor(Math.random() * this.#wordListQtd);
            if (this.#wordListSelected[randomWordPosition] == undefined) {
                let wordSelected = this.#wordList[Math.floor(Math.random() * this.#wordList.length)];
                console.log("Pos: ", randomWordQtd, "WS: ", wordSelected);

                if (this.#wordListSelected.indexOf(wordSelected) == -1) {
                    this.#wordListSelected[randomWordPosition] = wordSelected;
                    randomWordQtd++
                }

            }
        }
        while (randomWordQtd < this.#wordListQtd);
        return this.#wordListSelected;
    }

    // set list of words, receive "Array"
    set setWordList(_wordList) {
        if (Array.isArray(_wordList)) {
            this.#wordList = _wordList;
            console.log("SetWordList: ", this.#wordList);
            console.log("SetWordListLength: ", this.#wordList.length);
        } else {
            return "erro: parametro deve ser um array";
        }
    }

    // get all words inserted in wordlist, return "Array"
    get getWordList() {
        return this.#wordList;
    }

    // set extra letter for show in html
    set setExtraLetter(_letterExtraValue) {
        if (Number.isInteger(_letterExtraValue)) {
            this.#letterExtra = _letterExtraValue;
            console.log("SetExtraNumber: ", this.#letterExtra );
        } else {
            return "erro: parametro deve ser um 'Number'";
        }
    }

    getWordListSelected(_qtd) {
        //this.#wordListQtd = _qtd;
        this.#wordListQtd = this.#wordList.length > _qtd ? _qtd : this.#wordList.length;
        console.log(this.#wordListQtd);
        this.#letterTotal = (this.#wordListQtd + this.#letterExtra) <= this.#letterAlphabet.length ? (this.#wordListQtd + this.#letterExtra) : 25;
        this.randomWordListSelect();
        this.randomLetterList();

        //console.table(this.#wordListSelected)
        //console.table(this.#letterListSelected)

        return [this.#wordListSelected, this.#letterListSelected];
    }
}