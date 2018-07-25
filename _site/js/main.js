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
    var filterVal = $(this).attr('id');

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
      var filterVal = $(this).attr('id');

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

  // $(document).ready(function() {
  //   $('.open-room-details-1, .open-room-details-2, .open-room-details-3').magnificPopup({
  //     type:'inline',
  //     midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  //   });
  // });


  $(document).ready(function() {
    $(window).on('load', function() {
      var now, lastDatePopupShowed;
      now = new Date();

      if (localStorage.getItem('lastDatePopupShowed') !== null) {
        lastDatePopupShowed = new Date(parseInt(localStorage.getItem('lastDatePopupShowed')));
      }

      if (((now - lastDatePopupShowed) >= (0.1 * 86400000)) || !lastDatePopupShowed) {
        $.magnificPopup.open({
          items: { src: '#launch-popup' },
          type: 'inline'
        }, 0);

        localStorage.setItem('lastDatePopupShowed', now);
      }
    });
  });

// This creates a funtion for the rooms details sections where we can show a section by clicking on the show button and hide it with the hide button

  $(document).ready(function(){
    $("#hide-1").click(function(){
        $("#popup-room-details-1").hide();
    });
    $("#show-1").click(function(){
        $("#popup-room-details-1").show();
    });
    $("#hide-2").click(function(){
        $("#popup-room-details-2").hide();
    });
    $("#show-2").click(function(){
        $("#popup-room-details-2").show();
    });
    $("#hide-3").click(function(){
        $("#popup-room-details-3").hide();
    });
    $("#show-3").click(function(){
        $("#popup-room-details-3").show();
    });
});


// this gives you left and right buttons to toggle through classes
  var slideIndex = 1;
  showRoomGallery(slideIndex);

  function plusRoomGallery(n) {
      showRoomGallery(slideIndex += n);
  }

  function showRoomGallery(n) {
      var i;
      var x = document.getElementsByClassName("bg-image-room");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length} ;
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      x[slideIndex-1].style.display = "block";
  }

  // This creates a function that allows a button to take you back to the last page you visited, to use it create a button like this <button onclick="goBack()">Go Back</button>

  function goBack() {
    window.history.back();
  }
