document.addEventListener("DOMContentLoaded", function() {

  // Card toggle 
  let cardToggles = document.getElementsByClassName("card-toggle");
  for (let i = 0; i < cardToggles.length; i++) {
    cardToggles[i].addEventListener("click", e => {
      console.log(e);
      console.log(e.currentTarget.parentElement.parentElement.childNodes[5]);
      e.currentTarget.parentElement.parentElement.childNodes[5].classList.toggle(
        "is-hidden"
      );
    });
  }


    // Javascript for navbar burger 
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

 
    if ($navbarBurgers.length > 0) {
  
  
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
     
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
       
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

  // Navigation bar change to transparent 
  var scroll_start = 0;
  var startchange = $(".start-change");
  var offset = startchange.offset();
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    console.log(scroll_start);
    console.log(offset.top);
    if (scroll_start > offset.top - 300) {
      $(".navigation-bar").removeClass("navbar-change-transparent");
      $(".navigation-bar").addClass("navbar-change-white");
    } else {
      $(".navigation-bar").removeClass("navbar-change-white");
      $(".navigation-bar").addClass("navbar-change-transparent");
    }
  });

// Scroll to relevant section 
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


});
