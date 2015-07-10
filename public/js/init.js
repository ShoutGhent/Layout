(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();

    $('[data-toggle]').on({
      click: function(event) {
        event.preventDefault();

        var selector = $(this).data('toggle');
        $(selector).toggle();
        $(this).blur();
        setTimeout(function()
        {
          var focusable = $(selector).data('focus');
          if (focusable) {
            $(focusable).focus();
          }
        }, 200);
      }
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space
