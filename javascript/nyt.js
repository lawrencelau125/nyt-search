var searchterm = ""
var beginDate = "";
var endDate = "";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//Button function
    $('button').on('click',function() {
        searchterm = $('#searchterm').val();

url += '?' + $.param({
		'api-key': "d6c8cdc35f93488dbaa04dd9173ea9fb",
		// searches article body, headline, and byline
		'q': searchterm,
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
        // Results Data
var results = result.response.docs;
                //--------------------------------

                for (var i = 0; i < results.length; i++) {

                  var counter = 1

                    var searhResults = $('<div>');

                    var p = $('<p>').text(results[i].headline.main);
                    var q =	$('<p>').text(results[i].byline.original);
                    var r = $('<p>').text("Section:  " + results[i].section_name);
                    var s =	$('<p>').text(results[i].pub_date);
                    var t =	$('<p>').text(results[i].web_url);
                    

                    $(".panel-body").append(p);
                    $(".panel-body").append(q);
                    $(".panel-body").append(r);
                    $(".panel-body").append(s);
                    $(".panel-body").append(t);
                }

	console.log(result);
}).fail(function(err) {
	throw err;
});

    });
    $('clear').on('click',function() {
        $('#search').empty();
    });



