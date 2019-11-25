$(document).ready(function(){
    $( "nav.menu > ul > li > a" ).click(function() {
        $(this).next().toggle( "slow", function() {
          // Animation complete.
        });
      });
  });