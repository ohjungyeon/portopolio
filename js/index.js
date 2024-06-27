$(document).ready(function () {
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();

    if (sc >= 900 && sc <= 1350) {
      $(".bg").stop().animate({ width: "200%", height: "250%" });
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

    let move = $("#conatainer").eq(navi).offset();
    $("html, body").stop().animate({ scrollTop: move });
  });

  // let total = $(".panel li").length;
  let total = 4;
  let i = 0;
  console.log(total);

  $(".fa-circle-chevron-right").on("click", function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    let newright = -500 * i;
    $(".panel").animate({ "margin-left": newright + "px" });
  });

  $(".fa-circle-chevron-left").on("click", function () {
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    let newLeft = 500 * i; // 이미지의 너비에 따라 조정
    $(".panel").animate({ "margin-left": -newLeft + "px" });
  });

  // $(".graphic1").click(function () {
  //   $(this).find(".modal").css("display", "block");
  // });

  // $(".close").click(function () {
  //   $(".modal").css({ display: "none" });
  // });
  $(document).ready(function () {
    // 페이지 로드시 팝업 overlay를 표시합니다.
    $(".popup-overlay").fadeIn();

    $(".popup-overlay, .close").click(function () {
      $(".popup, .popup-overlay").fadeOut();
      $("body").removeClass("modal-open"); // 모달 닫을 때 클래스 제거
    });

    $(".popup").click(function (event) {
      event.stopPropagation();
    }); /*못나오게 하기*/

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
});
$(".popup-overlay").fadeIn();

$(".popup-overlay, .close").click(function () {
  $(".popup, .popup-overlay").fadeOut();
});

$(".popup").click(function (event) {
  event.stopPropagation();
});
$(function () {
  $(".marquee").marquee({
    duration: 5000,
  });
});
// $(".fa-circle-chevron-right").on("click", function () {
//   let i = parseInt($(".panel").css("margin-left")) || 0;
//   let next = i - 550;
//   let max = -550 * ($(".panel li").length - 1);
//   if (next < max) {
//     i = 0;
//   } else {
//     i = next;
//   }
//   $(".panel").animate({ "margin-left": i + "px" });
// });
document.addEventListener("DOMContentLoaded", function () {
  let marquee = document.querySelector(".marquee");
  let rolling = document.querySelector(".rolling");

  if (rolling) {
    let clone = rolling.cloneNode(true);
    marquee.appendChild(clone);

    rolling.id = "rolling1";
    clone.id = "rolling2";
  }
});
