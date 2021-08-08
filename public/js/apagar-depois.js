$(".draggable").draggable({
    revert: function (dropped) {
      if (dropped === false) {
        return true
      }

      const class_Dragg = $(this).attr('class');
      const id_Dropp = dropped.attr('id');


      if (class_Dragg.includes("animalSavanna") && id_Dropp === 'habitat_savanna' || class_Dragg.includes("animalArctic") && id_Dropp === 'habitat_arctic') {
        return false
      }
      else {
        return true
      }
    }
  });

  $(".dropp_habitat").droppable({
    drop: function (event, ui) {
      const class_Dragg = $(ui.draggable).attr('class');
      const id_Dropp = $(this).attr('id');
      console.log("drop chamado " + id_Dropp)


      // if (game.moveIsRight(..,..)) {
      if (class_Dragg.includes("animalSavanna") && id_Dropp === 'habitat_savanna' || class_Dragg.includes("animalArctic") && id_Dropp === 'habitat_arctic') {
        // game.increaseScore()
        // $("#display").html(game.getScore())
        console.log("foi aceito")
        const audio = new Audio('./mp3/pontuacao.mp3');
        audio.play();
        // score.setScore();
        // $("#score").html(score.getResult());
      }
      else {
        console.log("foi rejeitado")
        const audio = new Audio('./mp3/explosao.mp3');
        audio.play();
      }
      $(this)
        .addClass("ui-state-highlight")
        .find("p")
        .html("Dropped!");
    }
  });
