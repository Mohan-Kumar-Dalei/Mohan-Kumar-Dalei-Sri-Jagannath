/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
}); 

// Btn go to top

(function ($){
  "use strict";
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-top-btn').fadeIn('slow');
      } else {
          $('.back-top-btn').fadeOut('slow'); 
      }
  });
  $('.back-top-btn').click(function () {
      $('html, body').animate({scrollTop: 0}, 50,);
      return false;
  });

})(jQuery);
