'use strict';

$('.input_class_checkbox').each(function () {
  $(this).hide().after('<div class="class_checkbox" />');

});

$('.class_checkbox').on('click', function () {
  $(this).toggleClass('checked').prev().prop('checked',
    $(this).is('.checked'));
});

$(".dropdown dt").click(function() {
  $(".dropdown dd ul").toggle();
  $(".dropdown dt span").css('visibility', 'none');
  $(".dropimage").toggle();
  $(".dropimage2").toggle();

});

$(".dropdown dd ul li").click(function() {
  var text = $(this).html();
  $(".dropdown dt span").html(text);
  $(".dropdown dd ul").hide();
}); 

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (! $clicked.parents().hasClass("dropdown"))
      $(".dropdown dd ul").hide();
});

var text = $(this).html();
$(".dropdown dtspan").html(text);

function getSelectedValue(id) {
  return $("#" + id).find("dtspan.value").html();
}

// $('.radiobuttons').on('click', function() {
//   $('.radiobutton-on').toggle();
//   $('.radiobutton-off').toggle();
// });

$('.radiobuttons').on('click', function() {
  $('.radiobutton1 .radiobutton-on').css('display', 'none');
  $('.radiobutton1 .radiobutton-off').css('display', 'none');
  $('.radiobutton2 .radiobutton-on').css('display', 'none');
  $('.radiobutton2 .radiobutton-off').css('display', 'none');
});

