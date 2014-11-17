 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      closeOnEscape: false,
      show: {
       effect: "explode",
       duration: 1000,
       
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
