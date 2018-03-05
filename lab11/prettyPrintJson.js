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
    prettyPrintJSON(jsondata);
  });
}

function prettyPrintJSON(jsondata) {
  //prints the prettyJSON to the screen
  var pretty = JSON.stringify(jsondata, null, 4);
  $('#resultsbox').append("<p>" + pretty + "</p>");
}
