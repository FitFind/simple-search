 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      position: { my: "left top", at: "right top", of: window },
      show: {
       effect: "explode",
       duration: 10000,
       
       
       
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
