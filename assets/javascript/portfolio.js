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
  });
  