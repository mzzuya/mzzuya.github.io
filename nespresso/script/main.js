jQuery(document).ready(function(){

    $(function(){
        $(document).on('scroll', function(){
            if($(window).scrollTop() > 100){
                $("header .inner").removeClass("deactive");
                $("header .inner").addClass("active");
            }else{
                $("header .inner").removeClass("active");
                $("header .inner").addClass("deactive");
            }
        })
    
    });
    

    $('#main-visual .slide-wrap .slide:gt(0)').hide();
    let i = 0;
    setInterval(function(){
        $('.slide').eq(i).fadeOut(1500);
    i++;
    i %= 3;
        $('.slide').eq(i).delay(300).fadeIn(1500);
    },3000);
      


    $('.sect01-wrap').slick({
      autoplay : true ,
      autoplaySpeed : 2000 ,
      infinite: true ,
      slidesToShow: 3,
      nextArrow:$('.next'),
      prevArrow:$('.prev')
    });




    const tabItem = document.querySelectorAll(".tab__item");
    const tabContent = document.querySelectorAll(".tab__content");

    tabItem.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        
        e.preventDefault(); 
        
        tabContent.forEach((content) => {
        content.classList.remove("active");
        });

        tabItem.forEach((content) => {
        content.classList.remove("active");
        });

        tabItem[index].classList.add("active");
        tabContent[index].classList.add("active");
    });
    });




    $(".btn").click(function(){
        $("#menu,.page_cover,html").addClass("open");
        window.location.hash = "#open";
    });
    window.onhashchange = function(){
        if (location.hash != "#open") {
          $("#menu,.page_cover,html").removeClass("open");
        }
    };

});