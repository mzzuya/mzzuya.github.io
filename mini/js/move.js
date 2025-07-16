jQuery(document).ready(function(){

    $("header nav a").on("click", function (e) {
      e.preventDefault(); // 기본 링크 이동 막기
      let target = $(this).attr("href"); // href 값 (예: #sect03)
      let pos = $(target).offset().top - 80; // 필요 시 header 높이만큼 보정
      $("html, body").stop().animate(
        {
          scrollTop: pos,
        },
        600,
        "swing"
      );
    });

    $(".hero-overlay .btn").on("click", function (e) {
      e.preventDefault();
      let target = $(this).attr("href");
      let pos = $(target).offset().top - 80;
      $("html, body").stop().animate({ scrollTop: pos }, 600, "swing");
    });

  
    $('.slide-wrapper').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
      });


    $('.sect01-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
        responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });



    const $nav = document.querySelector('#tab-button-nav');
    const $sections = document.querySelectorAll('.tab-section');
    const $tabs = document.querySelectorAll('.tab-button');

    $nav.addEventListener('click', (e) => {
      if (!e.target.classList.contains('tab-button')) return;

      const focusedTabId = e.target.dataset.tabSection;

      $sections.forEach(($section) => {
        if ($section.id === focusedTabId) {
          $section.removeAttribute('hidden');
        } else {
          $section.setAttribute('hidden', true);
        }
      });

      $tabs.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');
    });


    $('.sect04-wrapper').slick({
      adaptiveHeight: false,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      prevArrow: $('.sect04-prev'),
      nextArrow: $('.sect04-next'),
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    

});