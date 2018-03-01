
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";

	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html
	document.getElementById('content').innerHTML = items_html;
}

function addSearchItem() {
	//get the html that already exists
	//var alreadyExists = document.getElementById('content').innerHTML;
	//get the text from the searchbox
	//var searchText = document.getElementById('searchbox').value;
	//add the two strings together
	//var newContents = alreadyExists + "<"
	//modify the html of the content div

	//Used to test if the method is actually called
	//alert("Hello");
	var previousText = document.getElementById('content').innerHTML;
	var searchText = document.getElementById('searchbox').value;
	document.getElementById('content').innerHTML = previousText + "<ul><li>" + searchText + "</li></ul>";
}

function removeItem() {
	var contentText = document.getElementById('content').innerHTML.split("><");
}
