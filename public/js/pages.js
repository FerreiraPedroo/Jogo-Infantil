export const phase1 = `
            <div class="phase-1">
            <p class="instruction">AJUDE A COMPLETAR A PALAVRA!</p>
            <div class="dashboard">
                <div id="letters-space">
                    <div class="letters">
                        <img class="letters-object drag vaca" src="./images/letter-V.png" alt="">
                    </div>
                    <div id="letters-middle">
                        <img class="letters-object ui-widget-content draggable drag abelha" src="./images/letter-A.png"
                            alt="">
                    </div>
                    <div class="letters">
                        <img class="letters-object drag navio" src="./images/letter-N.png" alt="">
                    </div>

                </div>
                <div id="words-space">
                </div>
            </div>
            <img class="back" src="./images/back.png" alt="">
            <img id="character" src="./images/character.png" alt="">
            <p class="score">+1</p>
            <div id="score-bar "> 
            <img id="coin" src="./images/coin-1.png" />
            <div class="progressbar"></div>
            </div>
            </div>
`

export const phase2 = `
    <div class="phase-2">
            <p class="instruction">AJUDE A ENCONTRAR O ANIMAL!</p>
            <div class="container">
                <div class="figures">
                    <div class="figures-animals">
                        <img class="drag pato" src="./images/pato-2.png" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag gato" src="./images/gato.png" style="width: 80%;" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag cachorro" src="./images/cachorro.png" />
                    </div>
                    <div class="figures-animals ">
                        <img class="drag coelho" src="./images/coelho.png" />
                    </div>
                    <div class="figures-animals ">
                        <img class="drag jacare" src="./images/jacare.png" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag sapo" src="./images/sapo2.png" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag arara" src="./images/arara.png" />
                    </div>
                </div>
                <div class="space-animals">
                    <div id="space-one">
                        <div class="spaces">
                            <div class="drop-animal drop_pato"></div>
                            <p class="animal">PATO</p>
                        </div>
                        <div class="spaces">
                            <div class="drop-animal drop_cachorro"></div>
                            <p class="animal">CACHORRO</p>
                        </div>
                    </div>
                    <div id="space-two">
                        <div class="spaces">
                            <div class="drop-animal drop_sapo"></div>
                            <p class="animal">SAPO</p>
                        </div>
                        <div class="spaces">
                            <div class="drop-animal drop_arara"></div>
                            <p class="animal">ARARA</p>
                        </div>
                    </div>
                    <div id="space-three">
                        <div class="spaces">
                            <div class="drop-animal drop_jacare"></div>
                            <p class="animal">JACARÉ</p>
                        </div>
                        <div class="spaces">
                            <div class="drop-animal drop_gato"></div>
                            <p class="animal">GATO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="progressbar"></div>
            <img id="coin" src="./images/coin-1.png" />
            <img class="back" src="./images/back.png" alt="">
        </div>

`

export const victoryScreen = `
        <div id="feedback-user">
        <div id="result">
            <p>VITÓRIA!!!</p>
            <div id="stars">
                <img src="./images/star.png" width="80px" />
                <img src="./images/star.png" width="80px" />
                <img src="./images/star.png" width="80px" />
            </div>
            <button id="next">Próxima</button>
        </div>
        <img id="character-feedback" src="./images/character.png">
        </div>
`

export const selectPhase = `
        <div id="game-initial">
        <p class="instruction-select-phase">SELECIONE A FASE</p>
        <div class="dashboard">
            <div class="select-phase">
                <div id="phase1" class="phase">
                    <div class="select-phase-stars" >
                        <div id="icone-star1-phase1" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star2-phase1" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star3-phase1" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                    </div>
                    <div id="icone-padlock-phase1" class="select-phase-padlock">
                        <img class="icone-lock" src="./images/padlock.png" alt="">
                    </div>
                </div>

                <div id="phase2" class="phase">
                    <div class="select-phase-stars">
                        <div id="icone-star1-phase2" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star2-phase2" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star3-phase2" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                    </div>
                    <div id="icone-lock-phase2" class="select-phase-lock">
                        <img class="icone-lock" src="./images/padlock.png" alt="">
                    </div>
                </div>

                <div id="phase3" class="phase">
                    <div class="select-phase-stars">
                        <div id="icone-star1-phase3" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star2-phase3" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star3-phase3" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                    </div>
                    <div id="icone-lock-phase3" class="select-phase-lock">
                        <img class="icone-lock" src="./images/padlock.png" alt="">
                    </div>
                </div>
            </div>
            <img class="back" src="./images/back.png" alt="">
        </div>
        </div>
        `
export const gameInitial = `
    <div id="game-initial">
            <p class="instruction">ESCOLHA UM AJUDANTE</p>
            <div class="dashboard">
                <div class="arrow">
                    <img src="./images/arrow-left.png" alt="">
                </div>
                <div id="character-select-img">
                    <img src="./images/character.png" alt="">
                </div>
                <div class="arrow">
                    <img src="./images/arrow-right.png" alt="">
                </div>
            </div>
            </div>
            <img class="back" src="./images/back.png" alt="">
            <div id="button-initial"><span>INICIAR</span></div>
        </div>
    `