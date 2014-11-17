 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      position: { my: "left top", at: "right top", of: window },
      show: {
       effect: "transfer",
       duration: 1000,
       effect: "highlight"
       
       
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
