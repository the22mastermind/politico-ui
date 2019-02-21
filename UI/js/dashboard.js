
$(document).ready(function() {
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
    $('.candidate-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.party-data').css('display', 'block');
    $('#parties').toggleClass('activated');
    $('#offices, #candidates, #petitions, #users').removeClass('activated');
  });
  $('#offices').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.candidate-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.office-data').css('display', 'block');
    $('#offices').toggleClass('activated');
    $('#parties, #candidates, #petitions, #users').removeClass('activated');
  });
  $('#candidates').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.office-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.candidate-data').css('display', 'block');
    $('#candidates').toggleClass('activated');
    $('#parties, #offices, #petitions, #users').removeClass('activated');
  });
  $('#petitions').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.candidate-data').css('display', 'none');
    $('.user-data').css('display', 'none');
    $('.office-data').css('display', 'none');
    $('.petition-data').css('display', 'block');
    $('#petitions').toggleClass('activated');
    $('#parties, #offices, #candidates, #users').removeClass('activated');
  });
  $('#users').on('click', function() {
    $('.party-data').css('display', 'none');
    $('.office-data').css('display', 'none');
    $('.candidate-data').css('display', 'none');
    $('.petition-data').css('display', 'none');
    $('.user-data').css('display', 'block');
    $('#users').toggleClass('activated');
    $('#parties, #offices, #candidates, #petitions').removeClass('activated');
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
  // Load register candidate form
  $("#load-candidate-form").on("click", function() {
    $(".dynamic-content").load("partials/register_candidate.html");
  });
  // Close party creation form
  $("#cancel-candidate-creation").on("click", function() {
    $(".close-form").close();
  });
  // View petition details
  $("#view-petitions").on("click", function() {
    $(".dynamic-content").load("partials/petitions.html");
  });
});