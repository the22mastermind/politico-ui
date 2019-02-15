
$(document).ready(function() {
  // $("#parties").toggleClass('activated');
  // $("#parties").css({"background-color":"#eee", "color":"#555"});
  // $("#offices, #petitions, #users").css({"background-color":"#008DCB", "color":"#FFF"});
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
    $('#parties').toggleClass('activated');
    $('#offices, #petitions, #users').removeClass('activated');
  });
  $('#offices').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.office-data').css('display', 'block');
    $('#offices').toggleClass('activated');
    $('#parties, #petitions, #users').removeClass('activated');
  });
  $('#petitions').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.office-data').css('display', 'none');
    $('.petition-data').css('display', 'block');
    $('#petitions').toggleClass('activated');
    $('#parties, #offices, #users').removeClass('activated');
  });
  $('#users').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.office-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'block');
    $('#users').toggleClass('activated');
    $('#parties, #offices, #petitions').removeClass('activated');
  });

  // Load create party form
  $("#load-party-form").on("click", function() {
    $(".dynamic-content").load("partials/create_party.html");
  });
  // Close party creation form
  $("#cancel-party-creation").on("click", function() {
    $(".close-form").close();
  });
  // Load create office form
  $("#load-office-form").on("click", function() {
    $(".dynamic-content").load("partials/create_office.html");
  });
  // Close party creation form
  $("#cancel-office-creation").on("click", function() {
    $(".close-form").close();
  });
  // View petition details
  $("#view-petitions").on("click", function() {
    $(".dynamic-content").load("partials/petitions.html");
  });
  // Close petition details
  $(".fa-times-thin").on("click", function() {
    $(".dynamic-content").unload("partials/petitions.html");
  });
});