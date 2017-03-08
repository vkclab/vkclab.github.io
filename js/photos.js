// var loadButton = document.getElementById('more_link');
if (typeof window.orientation !== 'undefined'){
	var feed = new Instafeed({
		clientId: '44022fd2ea504984a80df2abe018f800',
		get: 'user',
		userId: 4662351467,
		resolution: 'standard_resolution',
		accessToken: '4662351467.428fbe4.e6c443c1986949e284f1782a28f50c07',
		sortBy:'most-recent',
		limit: 6,
		after: function(){
			// $('#more_link').appendTo('#instafeed');

			// if (!this.hasNext()) {
			//	loadButton.setAttribute('disabled', 'disabled');
			// }
		}
	});
} else {
	var feed = new Instafeed({
		get: 'user',
		userId: 4662351467,
		resolution: 'standard_resolution',
		accessToken: '4662351467.428fbe4.e6c443c1986949e284f1782a28f50c07',
		sortBy:'most-recent',
		limit: 15,
		after: function(){
		// $('#more_link').appendTo('#instafeed');

		// if (!this.hasNext()) {
		//	loadButton.setAttribute('disabled', 'disabled');
		// }
		}
	});
}

// bind the load more button
// loadButton.addEventListener('click', function() {
// 	feed.next();
// });

feed.run();