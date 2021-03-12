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

  // funzione scorrimento in avanti delle immagini
  function runningAfterImg(img, firstImg) {
    // scorrimento immagini
    var img;
    var firstImg;
    pushAfterClassActive(img, firstImg);
  }

  // funzione scorrimento in avanti dei bullets
  function runningAfterBullets(bullet, firstBullet) {
    // scorrimento immagini
    var bullet;
    var firstBullet;
    pushAfterClassActive(bullet, firstBullet);
  }

  // funzione scorrimento indietro delle immagini
  function runningBeforeImg(img, lastImg) {
    // scorrimento immagini
    var img;
    var lastImg;
    pushBeforeClassActive(img, lastImg);
  }

  // funzione scorrimento indietro dei bullets
  function runningBeforeBullets(bullet, lastBullet) {
    // scorrimento immagini
    var bullet;
    var lastBullet;
    pushBeforeClassActive(bullet, lastBullet);
  }

  // 1. aggiungo evento con scorrimento al click su icona 'next'
  nextIcon.click(
    function () {
      // scorrimento immagini
      runningAfterImg($(".images img.active"), $(".images img.first"));

      // scorrimento bullets
      runningAfterBullets($(".nav i.active"), $(".nav i.first"));
    }
  );

  // 2. aggiungo evento con scorrimento al click su icona 'prev'
  prevIcon.click(
    function () {
      // scorrimento immagini
      runningBeforeImg($(".images img.active"), $(".images img.last"));

      // scorrimento bullets
      runningBeforeBullets($(".nav i.active"), $(".nav i.last"));
    }
  );

  // 3. aggiunto scorrimento utilizzando le freccette della tastiera
  $(document).keydown(
    function (e) {
      if (e.keyCode == "37") {
        // scorrimento immagini
        runningBeforeImg($(".images img.active"), $(".images img.last"));

        // scorrimento bullets
        runningBeforeBullets($(".nav i.active"), $(".nav i.last"));

      } else if (e.keyCode == "39") {
        // scorrimento immagini
        runningAfterImg($(".images img.active"), $(".images img.first"));

        // scorrimento bullets
        runningAfterBullets($(".nav i.active"), $(".nav i.first"));
      }
    }
  );

});
