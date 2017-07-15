
var hWin = $(window).height();
var wWin = $(window).width();
var og_hLogo = $('.logo').height();
var og_wLogo = $('.logo').width();
var movelogo = true;

var tLogo = hWin/2 ;
if(hWin>600){
    var tLogo = 600/2 ;
}
  
var lLogo = wWin/2 ;

console.log(hWin)
console.log(wWin)
console.log(tLogo)
console.log(lLogo)

// run when load //
$(window).bind("load", function() { 

    if(hWin > 700){

        $('.logo').css({'top':'300px'});

    }


});

// run when resize //
$( window ).resize(function() {
    
    hWin = $(window).height();
    wWin = $(window).width();
    tLogo = hWin/2 ;  
    lLogo = wWin/2 ;

    if(hWin>600){
        var tLogo = 600/2 ;
    }
    if($('.logo').top > 200){
        $('.logo').animate({
            top: hWin/2,
            left: wWin/2,
            width: og_wLogo,
            height: og_hLogo
        },1000);
    }

});

//-----------------------Scroll------------------//

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    console.log(wScroll)

    //  ------ Moving Logo -------

    if(wScroll>200 && movelogo){

        // $('.logo').css({'position':'absolute'});

        $('.logo').animate({
            top: 150,
            left: 100,
            width: ($('.logo').width()/3),
            height: ($('.logo').height()/3)
        },1000);

        $('.logo').css({'position':'fixed'});
        movelogo = false;
        //console.log('in if')
        //console.log(movelogo)


    }else if(wScroll<200 && !movelogo){
        //console.log('in else if')

        //console.log(tLogo)
        //console.log(lLogo)
     

        $('.logo').animate({
            top: tLogo,
            left: lLogo,
            width: og_wLogo,
            height: og_hLogo
        },1000);

        console.log(hWin)
        console.log(wWin)
        console.log(tLogo)
        console.log(lLogo)

        $('.logo').css({'position':'fixed'});
        movelogo = true;

    }else{ 
        //console.log('in else')

    }
    // ------------------------- //

    // ------ border ---------//

    $('.blobs').css({
        'transform' : 'translate('+ wScroll/15+'%,'+ wScroll/6+'%)'
    });

    $('.humans').css({
        'transform' : 'translate(0px,'+ wScroll/5+'%)'
    });

    $('.border').css({
        'transform' : 'translate(-'+ wScroll/15+'%,'+ wScroll/6+'%)'
    });


});


// ---------------- timer ------------------- //
// Set the date we're counting down to
var countDownDate = new Date("Nov 18, 2017 19:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = " • " + days + " • " + hours + " • "
  + minutes + " • " + seconds + " • " ;
   document.getElementById("subtime").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp days &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp hours &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp mintues &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp seconds &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);
// -------------------------------------------- //