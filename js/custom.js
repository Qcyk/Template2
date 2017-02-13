
/* scroll do diva*/
 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, 
        scrollOffset: 75, 
        filter: ':not(.external)',
        changeHash: true
    }); 

    
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });



    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 2) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }


