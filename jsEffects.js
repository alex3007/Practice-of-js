/*$().ready(function() {

    
$("a").css("color", "darkblue");
    
}*/

    var ar = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var curId = 0;
    var el = document.getElementsByClassName("slider__slides")[0];
    

    setTimeout(loadSomething, 1000);
    function loadSomething() {
        $("#result").text(ar[curId]);
        
        
        
    op = 0;
    el.style.opacity = 0;
    
   document.images["picture"].src = ar[curId];           
          
   setTimeout(function funcUp() {
         if (op > 1) 
             return;
         el.style.opacity = op;
         op += 0.05
         setTimeout (funcUp, 60);
     }, 60); 
        
        curId++;
              
        if (ar.length > curId) {
            setTimeout(loadSomething, 2000);
        }else if(ar.length == curId){
            curId = 0;
            setTimeout(loadSomething, 2000);
            
        };
    }




/*  // parallax effect
    $.fn.bgscroll = function (options) {

        var x = $.extend({
            bgpositionx: 50,
            direction: "bottom",
            debug: !1,
            min: 0,
            max: 100
        }, options);

        var a = $(document).height() - $(window).height(),
            b = a - (this.offset().top + this.height());

        this.offset().top < a && (b = 0);

        var c = (this.offset().top + this.height());

        if ($(window).scrollTop() > b && $(window).scrollTop() < c) {
            var d = ($(window).scrollTop() - b) / (c - b) * 100;

            "top" == x.direction && (d = 100 - d),
                d > x.max && (d = x.max),
                d < x.min && (d = x.min);

            if (x.debug) {
                console.log('Element background position: ' + d + ' %');
            }
        }

        return this.css({
            backgroundPosition: x.bgpositionx + '% ' + d + '%'
        });
    };


    // parallax settings  
    $(window).scroll(function () {
        $('.bg-1').bgscroll({
            direction: 'bottom', // bottom or top
            bgpositionx: 50, // x positio, 0..100, in %, 50 is center
            debug: false,  
            min: 0, // min position(%) of moving
            max: 100 // max position(%) of moving
        });
        $('.bg-2').bgscroll({
            direction: 'top'
        });
        $('.bg-3').bgscroll({
            direction: 'bottom'
        });
    })*/
    


****************************************************

var locations = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
var currentImage = 3;

setTimeout(nextImage, 1000);

    function nextImage() {
        
            currentImage++;
            if (currentImage == locations.length){ 
                currentImage = 0;
                 }
            
          document.images["picture"].src = locations[currentImage];
          return false;
            
        }}*/