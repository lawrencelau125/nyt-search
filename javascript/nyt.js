var searchterm = "Trump"
var beginDate = "";
var endDate = "";
var results = 1;
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
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
