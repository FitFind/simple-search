 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      position: { my: "left top", at: "right top", of: window },
      show: {
       effect: "highlight",
       duration: 500,
       
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
