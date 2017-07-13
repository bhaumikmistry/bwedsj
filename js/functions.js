
var hWin = $(window).height();
var wWin = $(window).width();
var og_hLogo = $('.logo').height();
var og_wLogo = $('.logo').width();
var movelogo = true;


$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    console.log(wScroll)

    //  ------ Moving Logo -------


    var tLogo = hWin/2 - og_hLogo/2 ;  
    var lLogo = wWin/2 - 100 ;
    if(wScroll>200 && movelogo){

        // $('.logo').css({'position':'absolute'});

        $('.logo').animate({
            top: 150,
            left: 50,
            width: ($('.logo').width()/3),
            height: ($('.logo').height()/3)
        },1000);

        $('.logo').css({'position':'fixed'});
        movelogo = false;
        console.log('in if')
        console.log(movelogo)


    }else if(wScroll<200 && !movelogo){
        console.log('in else if')

        console.log(tLogo)
        console.log(lLogo)
     

        $('.logo').animate({
            top: tLogo,
            left: lLogo,
            width: og_wLogo,
            height: og_hLogo
        },1000);

        $('.logo').css({'position':'fixed'});
        movelogo = true;

    }else{ 
        console.log('in else')

    }


    // $('.logo').css({
    //     'transform' : 'translate(0px,'+ wScroll/3+'%)'
    // });

    $('.humans').css({
        'transform' : 'translate(0px,'+ wScroll/5+'%)'
    });


});