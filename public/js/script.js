import { DragDropClass } from './letter-script-class.js'
import { createWordList, createDragLetter } from './letter-script.js'

const words = ["abelha", "navio", "vaca"];
const animals = ["pato", "sapo", "jacare", "cachorro", "arara", "gato"];
const musicGame = new Audio("../music/theme-music.mp3");
const feedbackGame = new Audio("../music/feedback-game.mp3");
const pointAudio = new Audio("../music/points-audio.mp3");
let score = 0;

$(document).ready(() => {

    // --------------------------------- CREATE DRAG & DROP ---------------------------------
    function createDropAndDrag(_arrayWords, _phase) {

        // --------------------------------- DRAG ---------------------------------
        $(".drag").draggable({
            cursor: "grabbing",
            revert: "invalid",
            snap: ".drop",
            snapMode: "inner",
            snapTolerance: 40,
            tolerance: "touch"
        });

        _arrayWords.forEach((elements) => {
            // --------------------------------- DROP ---------------------------------
            $(`.drop_${elements}`).droppable({
                accept: `.${elements}`,
                // ----------- EVENT DURING DRAG -----------
                activate: function (event, ui) {
                },
                // ----------- EVENT THAT OCCURS WHEN THE DRAG IS RELEASED -----------
                drop: function (event, ui) {

                    //  ----------- testes -----------
                    ui.offset.top = "50%";
                    ui.offset.left = "40%";
                    //  -----------------------------

                    //  ----------- CHANGE THE BACKGROUND -----------
                    $(this).css("background", "#728C0B");
                    //  -----------------------------

                    //  ----------- SCORE -----------
                    $(".score").show()
                        .animate({ top: '100px' }, "slow")
                        .animate({ fontSize: '3em' }, "slow")
                       .hide(1000)
                    //  -----------------------------

                    //  ----------- CHECKING THE PHASE -----------
                    _phase == 1 ? score += 30 : score += 15;
                    //  ----------------------------------------

                    //  ----------- CHECKING THE SCORE -----------
                    if (score >= 90) {
                        score = 100;
                        feedbackGame.play();
                        // ------- UPDATE SCORE --------
                        scoreUpdate(score);
                        // ------- CREAT SCREEN VICTORY --------
                        victory(_phase);
                        return;
                    } else {
                        pointAudio.play();
                        scoreUpdate(score);
                    };
                    //  ------------------------------------------
                }
                // ---------------------------------------------------------------------
            });
        });
    };


    // --------------------------------- UPDATE PROGRESS BAR ---------------------------------
    function scoreUpdate(_score) {
        $(function () {
            $(".progressbar").progressbar({
                value: _score
            });
        });
    };
    // ---------------------------------------------------------------------------------------


    // --------------------------------- CREATE WIN SCREEN ---------------------------------
    function victory(_phase) {
        $("body").append(`
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
        `);
        $("#character").hide(1000);

        //  ----------- NEXT PHASE -----------
        $("body").on("click", "#next", () => {
            score = 0;
            $(`.phase-${Number(_phase)}`).hide();
            $("#feedback-user").hide();
            _phase == 1 ? createSecondPhase() : createThirdPhase();
        });
        //  ----------------------------------
    };
    // ---------------------------------------------------------------------------------------------


    // ---------------------------------  CREATE SECOND PHASE HTML ---------------------------------
    function createSecondPhase() {
        $("main").html(`
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
        `);
        scoreUpdate(score);
        createDropAndDrag(animals, 2);
    };
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CREATE THIRD PHASE HTML ----------------------------------
    function createThirdPhase() {
        console.log("EM CONSTRUÇÃO")
    }
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CREATE FIRST PHASE HTML ---------------------------------
    $("main").on("click", "#start-game", () => {
        $("main").html(`
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
        `);
        musicGame.play();
        musicGame.loop = true;

        scoreUpdate(score);
        createDragLetter();
        createWordList();
        createDropAndDrag(words, 1);
    });
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  BACK FUNCTION ----------------------------------
    $("main").on("click", ".back", () => {
        $(".phase-1").hide();
        $(".phase-2").hide();
        $("#home-page").show();
        score = 0;
        scoreUpdate(score);

        musicGame.pause();
        musicGame.currentTime = 0;
    });
    // -----------------------------------------------------------------------------------


    // ---------------------------------  AUDIO CONTROLS ----------------------------------

    // ---------------------------------  EFFECTS CONTROLS ----------------------------------
    $("#audio-effects").click(() => {
        if (pointAudio.muted) {
            pointAudio.muted = false;
            feedbackGame.muted = false;
            $("#audio-effects").attr("src", "./images/mute.png");
        } else {
            pointAudio.muted = true;
            feedbackGame.muted = true;
            $("#audio-effects").attr("src", "./images/muted.png");
        }
    });
    // -----------------------------------------------------------------------------------

    // ---------------------------------  MUSIC CONTROLS ----------------------------------
    $("#music-theme").click(() => {
        if (musicGame.muted) {
            musicGame.muted = false;
            $("#music-theme").attr("src", "./images/music.png");
        } else {
            musicGame.muted = true;
            $("#music-theme").attr("src", "./images/no-sound.png");
        }
    });
    // -----------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------

    function sendInfoUser(_score){
        $.post(("url"), _score,(_data)=>{});
    }
});

