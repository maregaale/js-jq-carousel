$(function() {

  // VARIABILI:
  var nextIcon = $(".next");



  // FUNZIONI:
  function removeClassActive(element, firstElement) {

    element.removeClass("active");
    if (element.hasClass("last") == false) {
      element.next().addClass("active");
    } else {
      firstElement.addClass("active");
    }

  }

  // aggiungo scorrimento al click su icona 'next'
  nextIcon.click(
    function () {
      var imgAct = $(".images img.active");
      var firstImg = $(".images img.first");
      removeClassActive(imgAct, firstImg);
    }
  );

});
