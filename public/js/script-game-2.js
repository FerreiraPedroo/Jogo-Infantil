
const animals = ["pato", "sapo", "jacare", "cachorro", "arara", "gato"];
const musicGame = new Audio("./music/theme-music.mp3");
const feedbackGame = new Audio("https://audio-previews.elements.envatousercontent.com/files/173295841/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22HL56S7T-bonus-points.mp3%22")
let score = 0;

$(document).ready(() => {
    $(".drag").draggable({
        cursor: "grabbing",
        revert: "invalid",
        snap: ".drop",
        snapMode: "inner",
        snapTolerance: 40,
        tolerance: "touch",
        stop: function (event, ui) {
            console.log("aquiiiiiiiiiii");
            console.log(ui.position);
            ui.position = {
                "top": 0,
                "left": 0
            };
            console.log(ui.position);
            console.log(event);
        }
    });

    animals.forEach((elements) => {
        console.log(elements);
        $(`.drop_${elements}`).droppable({
            accept: `.${elements}`,
            // evento que ocorre quando o drag é arrastado
            activate: function (event, ui) {
                // $(this).css("border","1px solid #DCC706")
            },
            // evento que ocorre quando o drag é solto no drop
            drop: function (event, ui) {
                $(this).css("background", "#728C0B");
                $(this).droppable({
                    disabled: true
                })

                const pointAudio = new Audio("https://audio-previews.elements.envatousercontent.com/files/151063428/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22NW8FSR4-scoring-a-point.mp3%22");
                score += 15;
                if (score >= 90) {
                    score = 100;
                    feedbackGame.play();
                    scoreUpdate();
                    victory();
                    return;
                } else {
                    pointAudio.play();
                    scoreUpdate()
                }
            },

        });
    });

    function scoreUpdate() {
        $(function () {
            $(".progressbar").progressbar({
                value: score
            });
        });
    }

    function victory() {
        $("body").append(`
        <div id="feedback-user">
            <div id="result">
                <p>VITÓRIA!!!</p>
                 <div id="stars">
                    <img src="./images/star.png" width="80px" alt="">
                    <img src="./images/star.png" width="80px" alt="">
                     <img src="./images/star.png" width="80px" alt="">
             </div>
             <button id="next">Próxima Fase</button>
     </div>
     <img id="character-feedback" src="./images/character.png" alt="">
    </div>
        `);

        $("#character").css("display", "none");
    }

    scoreUpdate()

})