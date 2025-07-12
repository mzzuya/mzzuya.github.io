jQuery(document).ready(function(){

  $("#gnb a").on("click",function(){
    event.preventDefault(); 
    let hash=$(this).attr("href");
    let pos=$(hash).offset().top - 130;
  
    $("html").stop().animate({
        scrollTop:pos
      },600,"swing");
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



    const $nav = document.querySelector('#tab-button-nav')
    const $sections = document.querySelectorAll('.tab-section');

    $nav.addEventListener('click', (e) => {
      if (!e.target.classList.contains('tab-button')) {
        return;
      }
      
      const focusedTabId = e.target.dataset.tabSection;

      $sections.forEach(($section) => {
        if ($section.id === focusedTabId) {
          $section.removeAttribute('hidden');
        } else {
          $section.setAttribute('hidden', true);
        }
      });
    });


    $('.sect04-wrapper').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
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
    




    
  $(document).ready(function(){

    $('.menu_btn>a').on('click',function(){
        $('.menu_btn').hide();
        $('.sidebar_menu').show().animate({
        right:0
        });
    });

    $('.close_btn>a').on('click',function(){
        $('.menu_btn').show();
        $('.sidebar_menu').animate({
        right:'-' + 100 + '%'
        },function(){$('.sidebar_menu').hide();
        });
    });
  });
});