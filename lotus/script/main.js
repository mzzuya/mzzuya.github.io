jQuery(document).ready(function(){


    $('.main-slide .slide-group .slide:gt(0)').hide();
    let i = 0;
    setInterval(function(){
        $('.main-slide .slide').eq(i).fadeOut(1500);
    i++;
    i %= 3;
        $('.main-slide .slide').eq(i).delay(300).fadeIn(1500);
    },3000);


});