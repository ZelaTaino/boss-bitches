$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#about-us');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      var scrollOffset = offset.top - 250 - $("#navbar").height()
      if(scroll_start > scrollOffset) {
          $("#navbar").css('background-color', 'white');
          $("#navbar h1").css('color', 'black');
       } else {
          $('#navbar').css('background-color', 'transparent');
          $("#navbar h1").css('color', 'white');
       }
   });
    }
});