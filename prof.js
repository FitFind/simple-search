
$(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
       
      },
      hide: {
      
        
      }
    });
 
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });
