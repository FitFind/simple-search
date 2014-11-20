 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
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
