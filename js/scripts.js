$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const name = $("input#name").val();

    $(".name").text(name);

    $("#story").show();

    event.preventDefault();
  });
});