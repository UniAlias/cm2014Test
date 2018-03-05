$(function() {
  //document ready
  //alert("document ready");

  $('#searchform').submit(function() {
    var searchterms = $('#searchterms').val();
    console.log("here");
    addItemToList(searchterms);
    return false;
  });
});

function addItemToList(item) {
  //alert("Got here");
  $('#results').append("<li>" + item + "</li>");
}
