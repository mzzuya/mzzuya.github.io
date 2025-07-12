$(document).ready(function(){


    //원페이지
    $("#gnb a").on("click",function(){
        event.preventDefault(); // 기본동작(a태그의 기본기능인 링크기능)을 취소한다.
        let hash=$(this).attr("href");
        let pos=$(hash).offset().top - 70; //섹션의 top위치-nav의 높이만큼 스크롤길이를 줄임
    
        $("html").stop().animate({
                scrollTop:pos
            },600,"swing");
    });

    
    //gift
    const startPos = $("#giftcon").offset().top;

        $(window).on("scroll",function(){
            const scrollPos = $("html").scrollTop();
            const newPos = startPos + scrollPos; 

            $("#giftcon").animate({
                top:newPos
            },30,"swing");
        });


    //슬라이드//
    let current = 0;
    let timer = 0;
    const $slides = $("#main-slide .slide");
    const total=$slides.length;
    $slides.css("display","none");
    $slides.eq(0).css("display","block");

    for(let i=0 ; i< total ; i++){
        $controls = $("<button class='control-btn'></button>");
        $("#controls-box").append($controls);	
        if(i==0){
            $(".control-btn").addClass("active");
        }
    }

    function fnFade(idx){
        $slides.eq(current).fadeOut(1000);
        $slides.eq(idx).fadeIn(1000);
        current=idx;
        $(".control-btn").removeClass("active");
        $(".control-btn").eq(current).addClass("active");
    }

    function setSlide(){
        if(current == (total-1)){
            fnFade(0);
        }
        else{
            fnFade(current + 1);
        }
    }

    timer = setInterval(setSlide,3000);

    $(".control-btn").on("click",function(){	
        clearInterval(timer);
        timer=0;
        fnTog();
        var num=$(this).index();
        fnFade(num);
        $(".control-btn").removeClass("active");
        $(".control-btn").eq(current).addClass("active");
    
    });

    $("#btn").on("click",function(){
        if(timer==0){ //중지상태
            timer=setInterval(setSlide,2000);
            fnTog();
        }else{ //자동실행중
            clearInterval(timer); 
            timer=0;
            fnTog();
        }
    });

    function fnTog(){
        if(timer == 0){ //자동실행이 멈춘상태
            $("#btn").css({
                "background-position":"0px -20px" //시작이미지
            });
        }else{ //자동실행중 
            $("#btn").css({
                "background-position":"0px 0px" //중단이미지
            });
        }
    }

    //menu//
    $(".content").css("display","none");
    $(".content").eq(0).css("display","block");
    $(".tabs li").first().addClass("select");

    $(".tabs>li").on("click",function(){	
	    event.preventDefault();
	    $(".tabs>li").removeClass("select");	
	    $(this).addClass("select");

	    var active=$(this).find("a").attr("href");
	    $(".content").hide();
	    $(active).show();
    });
    
    $(window).on("scroll",function(){
        const sc = $(window).scrollTop();
        $(".box")[sc>=600?"addClass":"removeClass"](" on");
        $(".home-service")[sc>=1400?"addClass":"removeClass"]("on");
    });

    //event
    function fnEvtSlide(){
        $(".evtslide-group").animate({
            left:"-1520px" //760*2
        },{
            duration:300,
            easing:"swing",
            complete:function(){
                let $clone=$(".evtslide-group .slide:lt(2)").clone();
                $(".evtslide-group").append($clone);
                $(".evtslide-group .slide:lt(2)").remove();
                $(".evtslide-group").css({"left":"0px"});
            }
        });
    }
    
    setInterval(fnEvtSlide,2000);

});