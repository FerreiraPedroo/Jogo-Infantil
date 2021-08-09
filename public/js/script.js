import { DragDropClass } from './letter-script-class.js'
import { createWordList, createDragLetter } from './letter-script.js'
import { pageInitial, gameInitial, selectPhase, phase1, phase2, victoryScreen, theEnd } from './pages.js'

const dragDropWords = new DragDropClass;
let wordsSelected;

const words = ["abelha", "navio", "vaca", "arroz", "macaco", "baleia", "casa", "carro", "onibus", "urso"];
const animals = ["pato", "sapo", "jacare", "cachorro", "arara", "gato", "coelho"];
const characters = ["girl-1", "boy-1", "girl-2", "boy-2"];

const musicGame = new Audio("./music/theme-music.mp3");
const feedbackGame = new Audio("./music/feedback-game.mp3");
const pointAudio = "./music/points-audio.mp3";

const music = new Audio();
musicGame.play()

let score = 0;
let scorePlayer = {};
let nameImage = 0;
let teste;
let scoreTotal = 0;

$(document).ready(() => {

    // --------------------------------- CREATE DRAG & DROP ---------------------------------
    function createDropAndDrag(_arrayWords, _phase) {

        // --------------------------------- DRAG ---------------------------------
        $(".drag").draggable({
            cursor: "grabbing",
            revert: function (_drop) {

                if (_drop == false) {
                    return "invalid";
                } else {
                    const classDragg = $(this).attr("element");
                    const classDrop = _drop.attr("element");

                    if (classDragg != classDrop) {
                        return true;
                    }
                }
            },

            snap: ".drop",
            snapMode: "inner",
            snapTolerance: 40,
            tolerance: "touch",
            containment: ".dashboard"
        });

        $(`.letters-drop`).droppable({
            drop: function (event, ui) {
                ui.draggable.css({ "left": "0px", "top": "0px" })
                $(event.target).append(ui.draggable)
            }
        })


        _arrayWords.forEach((elements) => {
            // --------------------------------- DROP ---------------------------------
            $(`.drop_${elements}`).droppable({

                // ----------- EVENT THAT OCCURS WHEN THE DRAG IS RELEASED -----------
                drop: function (event, ui) {

                    //  ---------------------------------------------

                    let elementDropp = $(this).attr("element");
                    let elementDragg = $(ui.draggable).attr("element");

                    if (elementDragg != elementDropp) {
                        $(this).css("background", "#FF3333")
                            .animate({ "background": "#F6FED5" }, "slow")
                            score >= 0? score = score - 3 : score = 0;

                    } else {
                        //  ----------- RIGHT POSITION ------------------
                        ui.draggable.css({ "left": "0px", "top": "0px" })
                        $(event.target).append(ui.draggable)

                        //  ----------- CHANGE THE BACKGROUND -----------
                        $(this).css("background", "#728C0B");
                        //  ---------------------------------------------

                        //  ------------------ SCORE --------------------
                        $(".score").show()
                            .animate({ top: '35px' }, "slow")
                            .animate({ bottom: '100px' }, "fast")
                            .hide(1000);
                        //  ---------------------------------------------

                        //  ----------- CHECKING THE PHASE --------------
                        _phase == 1 ? score += 35 : score += 15;
                        //  ---------------------------------------------
                    }

                    //  ----------- CHECKING THE SCORE --------------
                    if (score >= 90) {
                        console.log(score);
                        feedbackGame.play();
                        // ------- UPDATE SCORE ---------------------
                        sendInfoUser(score, _phase);
                        scoreUpdate(score);

                        // ------- CREAT SCREEN VICTORY -------------
                        victory(_phase);
                        return;
                    } else {
                        sound(pointAudio);
                        scoreUpdate(score);
                    };
                    //  --------------------------------------------
                },
                out: function (event, ui) {
                    $(this).css("background", "#F6FED5");
                }
                // ---------------------------------------------------------------------
            });
        });
    };


    // --------------------------------- UPDATE PROGRESS BAR ---------------------------------
    function scoreUpdate(_score) {
        $(".progressbar").progressbar({
            value: _score
        });
    };
    // ---------------------------------------------------------------------------------------


    // --------------------------------- CREATE WIN SCREEN ---------------------------------
    function victory(_phase) {
        $("main").append(victoryScreen);
        $("#feedback-user").append(`
             <img id="character-feedback" src="../images/${characters[nameImage]}.png" />
        `);
        $("#character").hide(1000);

        //  ----------- NEXT PHASE -----------
        $("body").on("click", "#next", () => {
            score = 0;
            if (scorePlayer.phase == 1) {
                $("main").html(selectPhase);
                $("#game-initial").append(`
                  <img id="character-choice" src="./images/${characters[nameImage]}-cut.png">
                 `);
                $("#block").hide();
                $("#lock-2").hide();
            } else {
                $("main").html(theEnd);
            }

        });
        //  ----------------------------------
    };
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CREATE FIRST PAGE HTML - SELECT CHARACTER ---------------------------------
    $("main").on("click", "#start-game", () => {
        musicGame.play();
        musicGame.loop = true;
        dataUser();
        $("main").html(gameInitial);
    });
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CHOICE CHARACTER ---------------------------------
    $("main").on("click", ".arrow-left", () => {
        if (nameImage == 0) {
            nameImage = 3;
        } else {
            nameImage--
        }
        $("#character-person").attr("src", `../images/${characters[nameImage]}.png`);
    })
    $("main").on("click", ".arrow-right", () => {
        if (nameImage == 3) {
            nameImage = 0;
        } else {
            nameImage++
        }
        $("#character-person").attr("src", `../images/${characters[nameImage]}.png`);
    })
    // ---------------------------------------------------------------------------------------------

    // --------------------------------- CREATE FIRST PAGE HTML - SELECT PHASE --------------------------
    $("main").on("click", "#button-initial", () => {
        $("main").html(selectPhase);
        scorePlayer.character = characters[nameImage];
        $("#game-initial").append(`
        <img id="character-choice" src="./images/${characters[nameImage]}-cut.png">
        `);

    });
    // --------------------------------------------------------------------------------------------

    // ----------------------------------- CREATE FIRST PHASE -------------------------------------
    $("main").on("click", "#phase1", () => {
        $("main").html(phase1);
        $(".phase-1").append(`
        <img id="character" src="./images/${characters[nameImage]}.png" alt="">
        `)

        dragDropWords.setWordList = words;
        dragDropWords.setExtraLetter = 3;        //---------------------
        wordsSelected = dragDropWords.getWordListSelected(3);
        scoreUpdate(score);
        createDragLetter(wordsSelected[1], wordsSelected[0]);
        createWordList(wordsSelected[0]);
        createDropAndDrag(wordsSelected[0], 1);
    });

    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CREATE SECOND PHASE HTML ---------------------------------
    $("main").on("click", "#phase2", () => {
        $("main").html(phase2);
        scoreUpdate(score);

        dragDropWords.setWordList = animals;
        wordsSelected = dragDropWords.getWordListSelected()[0];

        createDropAndDrag(wordsSelected, 2);
    });
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  BACK FUNCTION ----------------------------------
    $("main").on("click", ".back", () => {
        $("main").html(pageInitial);
        score = 0;
        scoreUpdate(score);

        musicGame.pause();
        musicGame.currentTime = 0;
    });
    // -----------------------------------------------------------------------------------


    // ---------------------------------  AUDIO CONTROLS ----------------------------------

    // ---------------------------------  EFFECTS CONTROLS ----------------------------------
    $("#audio-effects").click(() => {
        if (music.muted) {
            music.muted = false;
            feedbackGame.muted = false;
            $("#audio-effects").attr("src", "./images/mute.png");
        } else {
            music.muted = true;
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

    // -------------------------------- AJAX ----------------------------------

    function sendInfoUser(_score, _phase) {
        scoreTotal = _score;
        scorePlayer.score = scoreTotal;
        scorePlayer.phase = _phase;
        console.log(scorePlayer.phase);
        $.post(("/score"), scorePlayer, (_data) => {
        });
    };

    // -------------------------------------------------------------------------

    // -------------------------------- AUDIO ----------------------------------
    function sound(_music) {
        music.src = _music;
        music.play();
    };
    // -------------------------------------------------------------------------

    // ----------------------------- SEARCH USER ------------------------------

    function dataUser() {
        scorePlayer = {
            name: `${$("#name-user").val()}`
        }
        $.post(("/playersearch"), scorePlayer, (data) => {
            if (data != false) {
                scorePlayer = data[0];
                if (scorePlayer.phase == 1) {
                    $("#block").hide();
                    $("#lock-2").hide();
                }
            }
        });
    };
    // -------------------------------------------------------------------------

    // ----------- ranking -----------------
    $("#ranking").on("click",()=>{
        $("#overlay-ranking").css("display","flex");

        $.get("/ranking", function( data ) {
            console.log(data);

            




        });

    });

    $("#close-overlay").on("click",()=>{
        $("#overlay-ranking").css("display","none");
    });

    // ----------------------------------
    
});

