// has jqurey as a dependcy

$(document).ready(function(){
  /* filtering */

  $('nav#portfolio-filter a').click(function(e) {
    e.preventDefault();
    console.log("We clicked it");

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().toLowerCase().replace(' ','-').replace(' ','-');

    $('#portfolio-grid .filterable-item').each(function() {
        if(filterVal == 'all'){
          $(this).removeClass('hidden');
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
    };
    });

    });

    /* filtering */

    $('nav#rooms-filter a').click(function(e) {
      e.preventDefault();
      console.log("We clicked it");

      /* make this <li> class active and remove class 'active' from any other <li>s */
      $('nav#rooms-filter .active').removeClass('active');
      $(this).addClass('active');

      /* get the name of the cateory from this link */
      var filterVal = $(this).text().toLowerCase().replace(' ','-').replace(' ','-');

      $('#rooms-grid .filterable-item').each(function() {
          if(filterVal == 'all'){
            $(this).removeClass('hidden');
          }else{
            if(!$(this).hasClass(filterVal)) {
              $(this).addClass('hidden'); // hide those that don't have the filter
            }else{
              $(this).removeClass('hidden'); // show those that do have the filter
            }
      };
      });

      });

    // end filterable gallery


});




// Smooth Scroll

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // end smooth scroll


  // magnific popup

  $(document).ready(function() {
    $('.open-room-details-1, .open-room-details-2, .open-room-details-3').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  });
