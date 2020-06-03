$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const name = $("input#name").val();
    const title = $("input#title").val();
    const address = $("input#address").val();

    $(".name").text(name);
    $(".title").text(title);
    $(".address").text(address);

    $("#story").show();

    event.preventDefault();
  });
});