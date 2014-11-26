// Doc ready
$(function(){
    // Shortcut function that performs search with the correct parameters.
    // Can be called without any arguments inline 
    function simpleSearch() {
        search( $( "input#query" ).val(), $( "#results" ), $( ".template.result" ) );
    };

    $( "#search" ).click(function() { simpleSearch(); alert("testing....") }
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
function search(query, $container, $template){
alert("button works");
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
			'h1': 'true',
	    'spellcheck': 'true',
	    'spellcheck.q': query,
        },
        jsonp: 'json.wrf',
        success: function (data) {
            renderResults(data.response.docs, $container, $template);
            alert("works");
            renderSpellCheck(data.response.spellcheck, ".spellcheck.spellchecktemp")
           
        },
        
    });
}

function renderSpellCheck(docs, $template) {
	var result = $template.clone();
	result.find("#spellcheckresults").append((docs.suggestions[0].suggestion[0]));	
	 
	} 



// Input: JSON array of results, results container, result HTML template
// Effect: Replaces results container with new results, and renders
// the appropriate HTML
// Output: void
function renderResults(docs, $container, $template){
    $container.empty(); // If there are any previous results, remove them
    var result;
    $.each(docs, function(index, doc){
        result = $template.clone();
        result.find( ".title > a" )
            .prop( "href", doc.url)
            .find( "h3" )
            .append( doc.title );
        result.find( ".url" ).append( doc.url );
        result.find( ".content" ).append( maxWords(doc.content, 100) );
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
