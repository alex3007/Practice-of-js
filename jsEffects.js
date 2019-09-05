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




/*

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