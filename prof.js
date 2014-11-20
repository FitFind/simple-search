 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      width: 500,
      show: {
       effect: "clip",
       duration: 100,
       
       
       
      },
      hide: {
        effect: "explode",
        duration: 100
      }
    });
 
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
      modal: true
    });
  });
