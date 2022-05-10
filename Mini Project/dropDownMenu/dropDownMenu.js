$(document).ready(function () {
  $(".menu").mouseover(function () {
    $(this).children(".sub").stop().slideDown(200);
  });

  $(".menu").mouseleave(function () {
    $(this).children(".sub").stop().slideUp(200);
  });
});