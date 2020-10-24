$(document).ready(function(){
  $(this).scrollTop(0);

  $(".navbar li a").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-65
      }, 1000);
    }
  });

  $('#testimonials div.collapse').on('shown.bs.collapse', function() {
    $(this).next().text("Read less");
  })
  
  $('#testimonials div.collapse').on('hidden.bs.collapse', function() {
    $(this).next().text("Read more");
  })

  $('.navbar-nav a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  
  
  
  $('#abouttext').on('shown.bs.collapse', function() {
    $(this).prev().text("HIDE PROGRAMME FEATURES");
  })
  
  $('#abouttext').on('hidden.bs.collapse', function() {
    $(this).prev().text("VIEW PROGRAMME FEATURES");
  })
});

