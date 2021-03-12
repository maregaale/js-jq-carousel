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


  // aggiungo evento con scorrimento al click su icona 'next'
  nextIcon.click(
    function () {
      var imgAct = $(".images img.active");
      var firstImg = $(".images img.first");
      pushAfterClassActive(imgAct, firstImg);
    }
  );

  // aggiungo evento con scorrimento al click su icona 'prev'
  prevIcon.click(
    function () {
      var imgAct = $(".images img.active");
      var lastImg = $(".images img.last");
      pushBeforeClassActive(imgAct, lastImg);
    }
  );

});
