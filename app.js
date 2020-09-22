

$(document).ready(function(){
  $(this).scrollTop(0);

  $(".navbar li a").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

$('.navbar-nav a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$('button').click(function(e) {
  e.preventDefault;
  var t = $(this).text();
  if(t == "Read more"){
    $(this).text("Read less");
  } else {
    $(this).text("Read more");
  }
  });