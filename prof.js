
 $(function() {
    $( "#userform" ).dialog({
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
 
    $( "#userform" ).click(function() {
      $( "#profile" ).dialog( "open" );
    });
  });
