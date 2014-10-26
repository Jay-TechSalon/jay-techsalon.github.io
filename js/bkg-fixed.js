$(window).load(function() {
  window.addEventListener("scroll", navbar_reset_top, false);

  var navbar_top = 460;

  function navbar_reset_top() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > navbar_top && navbar.className === "navbar_absolute") {
      document.getElementById("navbar").className = "navbar_fixed";
    } else if (scrollTop < navbar_top && navbar.className === "navbar_fixed") {
      document.getElementById("navbar").className = "navbar_absolute";
    }
  }

  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

});
