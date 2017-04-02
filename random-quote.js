$("#btnQuote").on("click", function() {
	$.ajax({
		dataType: "jsonp",
		url: "http://api.forismatic.com/api/1.0/?",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: function (response) {
			putContent( response ); 
		}
	});
});

function putContent( response ) {
	$(".quote").html( response.quoteText );
	$(".author").html( response.quoteAuthor );
}
