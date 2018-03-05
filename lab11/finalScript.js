$(function() {
  //document ready
  //alert("document ready");

  $('#searchform').submit(function() {
    var searchterms = $('#searchterms').val();
    //console.log("here");
    //call our search youtube function
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  //call youtube API using AJAX
  //build url for the request
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=74b46039&s=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata) {
    //handle the results
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata) {
  //create a string to contain our html code to inject
  var htmlstring = "";
  //iterate over the collection of results
  for (var i=0; i<10; i++) {
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }

  //inject the html into our empty list
  $("#results").html(htmlstring);
}
