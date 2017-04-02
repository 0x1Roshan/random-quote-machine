$( document ).ready(function() {
	getResponse();
});

$("#btnQuote").on("click", function() {
	getResponse();
});

function getResponse() {
	$.ajax({
		dataType: "jsonp",
		url: "http://api.forismatic.com/api/1.0/?",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: function (response) {
			putContent( response ); 
		}
	});
}

function putContent( response ) {

	$(".twitter-share-button").attr(
		"href", "https://twitter.com/intent/tweet?text=" 
		+ response.quoteText + " - " + response.quoteAuthor
		);

	$(".quote").html( response.quoteText );

	if ( !response.quoteText ) {
		$(".author").html( "-Unknown" );
	} else {
		$(".author").html( "-" + " " + response.quoteAuthor );
	}


}
