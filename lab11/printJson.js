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

function addItemToList(item) {
  //alert("Got here");
  $('#results').append("<li>" + item + "</li>");
}

function getResultsFromOMDB(searchterms) {
  //call youtube API using AJAX
  //build url for the request
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=74b46039&s=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata) {
    //handle the results
    printJSON(jsondata);
  });
}

function printJSON(jsondata) {
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
