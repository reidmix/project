$(function() {
  $('#action').click(function() {
    console.log($('#modal'));
    $('#modal').addClass('flexy');
    console.log("show");
  });

  $('#modal').click(function() {
    $(this).removeClass('flexy');
    console.log("hide");
  });
});

