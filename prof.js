 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
       modal: true,
        effect: "blind",
        duration: 1000
       
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
      modal: true
    });
  });
