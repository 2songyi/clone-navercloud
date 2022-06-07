$(function(){
  // $("header").load("./load/header.html .h-inner");
  // $("footer").load("./load/footer.html .footer-wrap");
  // $(".top-btn").load("./load/top_btn.html a");

  // scrollTop의 값이 첫번째 slide높이값보다 클때 header에 class추가하기
  $(window).scroll(function() {
    let scTop = $(window).scrollTop();
    let wHeight = $(window).height();

    if (wHeight <= scTop) {
      $("header").removeClass("main-header");
    } else {
      $("header").addClass("main-header");
    }

    /*scroll시 section별로 animation효과를 위한 class추가*/
    $(".section").each(function() { //each로 각각의 값을 가져옴
      let thisOffset = $(this).offset();
      // console.log(thisOffset);
      if (scTop >= 0 && scTop < 500) { //969
        // section01
      } else if (scTop >= 700 && scTop < 1601) { //969
        // section02
        $(this).addClass("effect");
      } else if (scTop >= 1601 && scTop < 2461) {
        // section03
      } else if (scTop >= 2461 && scTop < 3321) {
        // section04
        $(this).addClass("active");
      } else if (scTop >= 3321) {
        // section05
        $(this).addClass("effect");
      }
  })
});

// down 아이콘 클릭시 스크롤 에니메이션



  $(".section").each(function () {
                // 개별적으로 Wheel 이벤트 적용 mousewheel(IE/chrome/opera) DOMMouseScroll(FF)
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    /* IE */
                    if (!event) event = window.event;
                    //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 50;
                        //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120
                        if (window.opera) delta = -delta;
                    //휠에 대한 정보 얻기 Mozilla FF = detail
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveTop = $(this).next().offset().top;
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveTop = $(this).prev().offset().top;
                        }
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 500, complete: function () {
                        }
                    });
                });
              });

    // header 에 a태그가 변화할때 클래스를 추가해서 언더바 생기게
    //27일 2번에제
    $("ul#gnb").on("click", "a", function() {
      $("a").removeClass("on");
      $(this).addClass("on");
      return false; //일단 a태그 기능 없앰
    });

    // main auto slide
    // let winWidth = $(window).width(); //window width가져오기
    // let liLeng = $(".swiper-wrapper ul li").length; //li 개수 가져오기
    // $(".swiper-wrapper ul").css("width", winWidth*liLeng); //ul의 너비 설정
    // console.log($(".swiper-wrapper ul").css("width"));
    //
    // initialFunc("prev"); //슬라이드 포지션 초기화
    // // 슬라이드 포지션 함수
    // function initialFunc(init) {
    //   $(".swiper-wrapper").css("margin-left", -winWidth);
    //   if (init === "prev") {
    //     $(".swiper-wrapper ul li:last").prependTo(".swiper-wrapper ul");
    //   } else if (init === "next") {
    //     $(".swiper-wrapper ul li:first").appendTo(".swiper-wrapper ul");
    //   }
    // }
    //
    // function btnClickFunc(elem) {
    //   elem.click(function() {
    //     let caInMarginLeft = parseInt($(".swiper-wrapper").css("margin-left"));
    //     let isAni = $(".swiper-wrapper").is(":animated");
    //
    //     if (!isAni) {
    //
    //       if ($(elem).hasClass("prev")) {
    //         $(".swiper-wrapper").animate({marginLeft: caInMarginLeft + winWidth}, "slow", function(){
    //           initialFunc("prev");
    //         });
    //       } else if ($(elem).hasClass("next")) {
    //         $(".swiper-wrapper").animate({marginLeft: caInMarginLeft - winWidth}, "slow", function(){
    //           initialFunc("next");
    //         });
    //       }
    //     }
    //   })
    // }
    // $(".slide-btn").each(function(){
    //   btnClickFunc($(this));
    // });



    // footer 관계사 hide, show
    // .sub 를 toggle로 주고 빼고 함 .sub있는 경우 올라와있고 아니면 내리기
    // $("관계사 ul").hide();
    // $("관계사 ul").click( function(){
    //   $("관계사 .sub").toggle();
    // })


    // top-btn
    // 클락사 상단으로 이동
    $("#top-btn").click(function(){
      $("html, body").animate({scrollTop: 0}, 1000);
    });
    // top에 있을때는 안보이게
    $(window).scroll(function(){
      let wHeight = $(window).scrollTop();

      if (wHeight == 0) {
        $("#top-btn").removeClass("on");
      } else if (wHeight > 0)(
        $("#top-btn").addClass("on")
      )
    });

    $("button#family-list-btn").click(function(){
      console.log('test');
    });


});
