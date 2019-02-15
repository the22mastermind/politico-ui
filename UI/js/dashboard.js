
$(document).ready(function(){
  $("#parties").css("background-color", "#eee");
  $("#parties").css("color", "#555");
  // Edit party
  $(".fa-edit").on("click", function(){
    $(this).closest(".data").css("visibility", "hidden");
  	$(this).closest(".data").css("display", "none");
    $(this).closest(".edit-data").css("visibility", "visible");
  	$(this).closest(".edit-data").css("display", "table-cell");
  });
  // Abort edit
  $(".abort").on("click", function(){
    $(".edit-data").css("visibility", "hidden");
  	$(".edit-data").css("display", "none");
    $(".data").css("visibility", "visible");
  	$(".data").css("display", "table-cell");
  });
  // Navigate side menu
  $('#parties').on('click', function() {
    $('.office-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.party-data').css('display', 'block');
    $('').css('display', 'block');
  });
  $('#offices').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.office-data').css('display', 'block');
  });
});