$(document).ready(function () {
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();

    // 이미지 크기 조정 조건
    let panelWidth = $(window).width() <= 350 ? 350 : 1200;
    let panelHeight = $(window).width() <= 350 ? "250%" : "180%";

    if (sc >= 900 && sc <= 1350) {
      $(".bg").stop().animate({ width: panelWidth, height: panelHeight });
    }

    let baseline = -200;
    let con1 = $("#intro").offset().top + baseline;
    let con2 = $("#about").offset().top + baseline;
    let con3 = $("#portfolio").offset().top + baseline;
    let con4 = $("#graphic").offset().top + baseline;
    let con5 = $("#content").offset().top + baseline;

    if (sc >= con1 && sc < con2) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
    } else if (sc >= con2 && sc < con3) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("#wrap > div").removeClass("on");
      $("#wrap #about").addClass("on");
    } else if (sc >= con3 && sc < con4) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("#wrap > div").removeClass("on");
      $("#wrap #portfolio").addClass("on");
    } else if (sc >= con4 && sc < con5) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
      $("#wrap > div").removeClass("on");
      $("#wrap #graphic").addClass("on");
    } else if (sc >= con5) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(4).addClass("on");
      $("#wrap > div").removeClass("on");
      $("#wrap #content").addClass("on");
    }
  });

  $("#navi li").on("click", function () {
    let navi = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(navi).addClass("on");

    let move = $("#container").eq(navi).offset();
    $("html, body").stop().animate({ scrollTop: move });
  });

  let total = $(".panel li").length;
  let i = 0;

  $(".fa-circle-chevron-right").on("click", function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    let newRight = -panelWidth * i; // 이미지의 너비에 따라 조정
    $(".panel").animate({ "margin-left": newRight + "px" });
  });

  $(".fa-circle-chevron-left").on("click", function () {
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    let newLeft = panelWidth * i; // 이미지의 너비에 따라 조정
    $(".panel").animate({ "margin-left": -newLeft + "px" });
  });

  $(document).ready(function () {
    $(".popup-overlay").fadeIn();

    $(".popup-overlay, .close").click(function () {
      $(".popup, .popup-overlay").fadeOut();
      $("body").removeClass("modal-open");
    });

    $(".popup").click(function (event) {
      event.stopPropagation();
    });

    $(".graphic1").click(function () {
      $("#graphicPopup, .popup-overlay").fadeIn();
      $("body").addClass("modal-open");
    });
    $(".graphic2").click(function () {
      $("#graphicPopup2, .popup-overlay").fadeIn();
      $("body").addClass("modal-open");
    });
    $(".graphic3").click(function () {
      $("#graphicPopup3, .popup-overlay").fadeIn();
      $("body").addClass("modal-open");
    });
    $(".graphic4").click(function () {
      $("#graphicPopup4, .popup-overlay").fadeIn();
      $("body").addClass("modal-open");
    });
    $(".graphic5").click(function () {
      $("#graphicPopup5, .popup-overlay").fadeIn();
      $("body").addClass("modal-open");
    });
  });

  $(function () {
    $(".marquee").marquee({
      duration: 15000,
    });
  });
});
