$(function() {

  // VARIABILI:
  var nextIcon = $(".next");
  var prevIcon = $(".prev");
  var bullet = $(".nav i");

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

  // funzione per reggiungere l'immagine corrispondente al bullet selezionato
  function checkBullets(element1, element2, element3, element4) {
    element1.removeClass("active");
    element2.removeClass("active");
    element3.addClass("active");
    element4.addClass("active");
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
      // tasto sinistro
      if (e.keyCode == "37") {
        // scorrimento immagini
        runningBeforeElement($(".images img.active"), $(".images img.last"));

        // scorrimento bullets
        runningBeforeElement($(".nav i.active"), $(".nav i.last"));

      }
      // tasto destro
      else if (e.keyCode == "39") {
        // scorrimento immagini
        runningAfterElement($(".images img.active"), $(".images img.first"));

        // scorrimento bullets
        runningAfterElement($(".nav i.active"), $(".nav i.first"));
      }
    }
  );

  // 4. al click sui bullets mostro l'immagine corrispondente
  bullet.click(
    function () {
      if ($(this).hasClass("first") == true) {
        checkBullets ($(".images img.active"), $(".nav i.active"), $(".images img.first"), $(".nav i.first"));
      } else if ($(this).hasClass("second") == true) {
        checkBullets ($(".images img.active"), $(".nav i.active"), $(".images img.second"), $(".nav i.second"));
      } else if ($(this).hasClass("third") == true) {
        checkBullets ($(".images img.active"), $(".nav i.active"),  $(".images img.third"), $(".nav i.third"));
      } else if ($(this).hasClass("last") == true) {
        checkBullets ($(".images img.active"), $(".nav i.active"), $(".images img.last"), $(".nav i.last"));
      }
    }
  );
});
