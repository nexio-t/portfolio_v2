document.addEventListener("DOMContentLoaded", function() {
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


    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }


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


  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 20
        }, 1000);
    }
});


});
