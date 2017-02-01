$.getJSON('http://sunnyyy.github.io/publications.json', function(jsonData) {
    
    // bug-check: log JSON object in console
    // console.log(jsonData)

    // section of webpage this script edits
    var div = $( ".content" );

    // for decreasing years between 2050 and 2000
    for (var y = 2050; y > 2000; y--) {

    	// if at least one paper was published year y
        if (y in jsonData) {

        	// bug-check: print out year on console
        	// console.log(y);

        	// add year to webpage
        	var year = "<p class='year'>&diams; "+y+" &diams;</p>";
        	div.append(year);

        	// get each paper + links i from year y
        	for (var i = 0; i < jsonData[y].length; i++) {

        		// doi used many times
        		var doi = jsonData[y][i]['doi'];

        		// create listing for paper
        		var paper = "<p class='paper'>";
        		// add authors
        		paper += jsonData[y][i]['authors'] + " ";

        		// add hyperlink to title
        		paper += "<a class='pub_title' href='" + doi + "'>";
        		// add title
        		paper += jsonData[y][i]['title'];
        		// close hyperlink
        		paper += "</a> ";

        		// add journal
        		paper += "<i>" + jsonData[y][i]['journal'] + "</i> ";
        		// add pages
        		if ('pages' in jsonData[y][i]) {
        			paper += jsonData[y][i]['pages'] + " ";
        		}
        		// add doi
        		paper += doi;
        		// end listing
        		paper += "</p>";

        		// add paper to webpage
		        div.append(paper);

		        // --------------------

		        // create links under paper
		        var links = "<p class='links'>";
		        // add doi
		        links += "<a class='pub_link' href='" + doi + "'>Full text (via DOI)</a> &diams; ";
		        // add google scholar
		        links += "<a class='pub_link' href='" + jsonData[y][i]['googscholar'] + "'>Google Scholar</a> &diams; ";
		        // add epistemio
		        links += "<a class='pub_link' href='" + jsonData[y][i]['epistemio'] + "'>Epistemio</a>";

		        div.append(links);

		    }

        }
    }
});