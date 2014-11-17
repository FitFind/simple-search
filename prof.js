
$(function() {
    $( "#userprofile" ).dialog({
      autoOpen: false,
      show: {
       effect: "blind",
        duration: 1000
      },
      hide: {
      effect: "explode",
       duration: 1000
      }
    });
 
    $( "#profile" ).click(function() {
      $( "#userprofile" ).dialog( "open" );
    });
  });
