var results = {
	url: 'https://api.etsy.com/v2/listings/active.js?api_key=l0w3n75mrxpsyo18jza49o6p&keywords=whiskey&includes=Images,Shop',
	type: 'GET',
	dataType: 'jsonp',
	success: function(data) {
		console.log(data);
		var container = $('#searchResults');
		data.results.forEach(function(val, i, arr) {
			var outerBox = $('<div></div>');
			var imageBox = $('<img>', {'src': val.Images[0].url_75x75});
			var imageLink = $('<a></a>', {href: val.url})
			var displayTitle = $('<div></div>');
			var titleLink = $('<a></a>', {href: val.url}).html(val.title);
			var seller = $('<a></a>', {href: val.Shop.url}).html(val.Shop.shop_name);
			var price = $('<span></span>').html('$' +val.price);


			imageLink.append(imageBox);
			displayTitle.append(titleLink);

			outerBox.append(imageLink);
			outerBox.append(displayTitle);
			outerBox.append(seller); 
			outerBox.append(price);
			container.append(outerBox);
		});

	},
	error: function(err) {
		console.log(err);
	},
	complete: function() {
		console.log('i got a response');
	}
};

$.ajax(results);

