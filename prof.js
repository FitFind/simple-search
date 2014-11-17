 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
       effect: "explode",
       duration: 1000,
       closeOnEscape: false;
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
