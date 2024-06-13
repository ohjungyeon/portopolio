$(function () {
  $(".btn-show-popup-1").click(function () {
    $(".popup-box-1").addClass("active");
  });

  $(".popup-box-1").click(function () {
    $(this).removeClass("active");
  });
});
