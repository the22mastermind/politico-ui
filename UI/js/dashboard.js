
$(document).ready(function(){
  $("#parties").css("background-color", "#eee");
  $("#parties").css("color", "#555");
  // Edit party
  $(".fa-edit").on("click", function(){
    $(".data").css("visibility", "hidden");
  	$(".data").css("display", "none");
    $(".edit-data").css("visibility", "visible");
  	$(".edit-data").css("display", "table-cell");
  });
  // Abort edit
  $(".abort").on("click", function(){
    $(".edit-data").css("visibility", "hidden");
  	$(".edit-data").css("display", "none");
    $(".data").css("visibility", "visible");
  	$(".data").css("display", "table-cell");
  });	        
});