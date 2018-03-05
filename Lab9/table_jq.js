$(document).ready(function() {
    $("#myTable").tablesorter();
    $("tbody tr:odd").addClass("Blue");
    $("tbody tr:even").addClass("Red");
});
