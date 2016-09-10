var searchterm = "Trump"
var beginDate = "";
var endDate = "";
var results = 1;
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        //Button function
            $('submit').on('click',function() {
                $('#search').;
            });
            $('clear').on('click',function() {
                $('#search').empty();
            });

url += '?' + $.param({
		'api-key': "d6c8cdc35f93488dbaa04dd9173ea9fb",
		// searches article body, headline, and byline
		'q': searchterm,
		'page': results,
});

if (beginDate !== "") {
	url += '?' + $.param({
		// YYYYMMDD
		'begin_date': beginDate,
	});
}
if (endDate !== "") {
	url += '?' + $.param({
		'end_date': endDate,		
	});
}
console.log(url);
$.ajax({
		url: url,
		method: 'GET',
}).done(function(result) {
	console.log(result);
}).fail(function(err) {
	throw err;
});

// Results Data
var results = result.param;
                //--------------------------------

                for (var i = 0; i < results.length; i++) {

                  var counter = 1

                    var searhResults = $('<div>');

                    var p = $('<p>').text(results[i].response.headline.main);
                    		$('<p>').text(results[i].response.byline);
                    		$('<p>').text("Section:  " + results[i].response.section_name);
                    		$('<p>').text(results[i].response.pub_date);
                    		$('<p>').text(results[i].response.web_url);
                    

                    .append();
                    .append();