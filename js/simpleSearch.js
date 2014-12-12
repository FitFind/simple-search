// Doc ready
$(function(){
    // Shortcut function that performs search with the correct parameters.
    // Can be called without any arguments inline 
    profile();	
    
    
    function simpleSearch() {
    	var age = ": age " + document.getElementById("age").value;
    	var sex = " " + document.querySelector('input[name="sex"]:checked').value;
    	var query =  $( "input#query" ).val() + age + sex;
    	var origquery = $( "input#query" ).val();
        search( origquery, query, $( "#results" ), $( ".template.result" ) );
    };

    $( "#search" ).click(function() { simpleSearch(); }
	);

    // Performs search when 'enter' key is pressed
    $( "input#query" ).keypress(function( event ) {
        if ( event.which == 13 ) simpleSearch();
    });

})

// Input: query string, results container, result HTML template
// Effect: makes an AJAX call to the server to get the results of the
// query, and then injects results into the DOM
// Output: void
function search(origquery, query, $container, $template){
document.querySelector(".container").style.display = "block";
document.querySelector("#headcontent").style.paddingTop = "0";
document.querySelector("#headcontent").style.paddingBottom = "0";

    $.ajax({
        type: 'GET',
        url: 'http://is-info320t1.ischool.uw.edu:8080/solr-example/collection1/select',
        dataType: 'JSONP',
        data: {
            'q': query,
            'qf': 'content title^2.0',
            'wt': 'json',
            'indent': 'false',
            'defType': 'edismax',
	    'spellcheck': 'true',
	    'spellcheck.q': query
        },
        jsonp: 'json.wrf',
        success: function (data) {
            renderResults(data.response.docs, $container, $template);
      	if (data.spellcheck != null) {
				 
		       renderSpellCheck(data.spellcheck, "#spellcheck#spellchecktemp");
      	}   
            
          
        },
        
    });
}


function renderSpellCheck(docs, $template) {
	var result = document.getElementById("spellchecktemp");
	if(docs.suggestions[1].suggestion[0] != null) {
			result.innerHTML = "Did you mean: ";
			var suggestion = document.createElement("span");
			suggestion.innerHTML = docs.suggestions[1].suggestion[0];
			suggestion.className = "spellsuggestion";
			document.getElementById("spellchecktemp").appendChild(suggestion);
			suggestion.onclick = function () {
			document.getElementById("query").value = suggestion.innerHTML;
			search($("span.spellsuggestion").html(), $( "#results" ), $( ".template.result" ) );
			suggestion.innerHTML = "";
			result.innerHTML = "";
			}
			
	}else{
		result.innerHTML = "";
	}


	} 



// Input: JSON array of results, results container, result HTML template
// Effect: Replaces results container with new results, and renders
// the appropriate HTML
// Output: void
function renderResults(docs, $container, $template){
    $container.empty(); // If there are any previous results, remove them
    var result;
    
   // var gender = document.getElementById("sex").value;
   // var fitnesslevel = document.getElementById("FitnessLevel").value;
    $.each(docs, function(index, doc){
        result = $template.clone();
        result.find( ".title > a" )
            .prop( "href", doc.url)
            .find( "h3" )
            .append( doc.title );
             result.find( ".url"  ).append( doc.url );
        var content = result.find(".content");
        for (var i = 0; i < content.length; i++) {
           if (content[i] === result.find("#query")) {
           	content[i].style.fontWeight = "bold";
           }
        }
        result.find( ".content" ).append( maxWords(doc.content, 50) );
        result.removeClass( "template" );
        $container.append(result);
    });
}

// Cuts off lengthy content to a given maximum number of words
// Input: string of words, maximum number of words
// Effects: none
// Output: the trimmed words
function maxWords(content, max) {
    var words = content.split(' ', max);
    var idx;
    var cutContent = "";
    for (idx = 0; idx < words.length; idx++) {
	cutContent += words[idx];
	cutContent += (idx + 1 == words.length ? "" : " ");
    }
    return cutContent + "...";
}

function profile () {
	
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
}

