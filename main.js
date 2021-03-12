$(function() {

  // VARIABILI:
  var nextIcon = $(".next");
  var prevIcon = $(".prev");

  // FUNZIONI:
  // funzione che sposta la classe 'active' ai successivi
  function pushAfterClassActive(element, firstElement) {
    element.removeClass("active");
    if (element.hasClass("last") == false) {
      element.next().addClass("active");
    } else {
      firstElement.addClass("active");
    }
  }

  // funzione che sposta la classe 'active' ai successivi
  function pushBeforeClassActive(element, lastElement) {
    element.removeClass("active");
    if (element.hasClass("first") == false) {
      element.prev().addClass("active");
    } else {
      lastElement.addClass("active");
    }
  }

  // funzione scorrimento in avanti di elementi
  function runningAfterElement(element, firstElement) {
    // scorrimento immagini
    var element;
    var firstElement;
    pushAfterClassActive(element, firstElement);
  }


  // funzione scorrimento indietro di elementi
  function runningBeforeElement(element, lastElement) {
    // scorrimento immagini
    var element;
    var lastElement;
    pushBeforeClassActive(element, lastElement);
  }

  // 1. aggiungo evento con scorrimento al click su icona 'next'
  nextIcon.click(
    function () {
      // scorrimento immagini
      runningAfterElement($(".images img.active"), $(".images img.first"));

      // scorrimento bullets
      runningAfterElement($(".nav i.active"), $(".nav i.first"));
    }
  );

  // 2. aggiungo evento con scorrimento al click su icona 'prev'
  prevIcon.click(
    function () {
      // scorrimento immagini
      runningBeforeElement($(".images img.active"), $(".images img.last"));

      // scorrimento bullets
      runningBeforeElement($(".nav i.active"), $(".nav i.last"));
    }
  );

  // 3. aggiunto scorrimento utilizzando le freccette della tastiera
  $(document).keydown(
    function (e) {
      if (e.keyCode == "37") {
        // scorrimento immagini
        runningBeforeElement($(".images img.active"), $(".images img.last"));

        // scorrimento bullets
        runningBeforeElement($(".nav i.active"), $(".nav i.last"));

      } else if (e.keyCode == "39") {
        // scorrimento immagini
        runningAfterElement($(".images img.active"), $(".images img.first"));

        // scorrimento bullets
        runningAfterElement($(".nav i.active"), $(".nav i.first"));
      }
    }
  );

});
