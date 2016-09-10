var searchterm = "Trump"
var beginDate = "20150101";
var endDate = "20160101";
var url = "https://crossorigin.me/https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
		'api-key': "d6c8cdc35f93488dbaa04dd9173ea9fb",
		// searches article body, headline, and byline
		'q': searchterm,
		// YYYYMMDD
		'begin_date': beginDate,
		'end_date': endDate,
		// options - newest oldest
		'sort': "newest"
});
$.ajax({
		url: url,
		method: 'GET',
}).done(function(result) {
	console.log(result);
}).fail(function(err) {
	throw err;
});
