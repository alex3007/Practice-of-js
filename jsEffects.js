
document.write('Привет!');


//Создадим 1 массив
var item1=['Автомобиль','Микроволновая печь'];
//Создадим 2 массив
var item2=['Стиральная машина'];
//Создадим 3 массив
var item3=['Пылесос'];
//Объединим массивы и запишем результат в переменную item
item=item1.concat(item3);
//Выведем содержимое массива item на страницу.
var i;
for (i in item) {
   document.write(i + ' элемент массива: ' + item[i] + '<br />');
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








