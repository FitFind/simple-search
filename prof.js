 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
       position: { my: "left top", at: "left bottom", of: button}
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
