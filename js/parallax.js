$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.logo').css({
        
            'transform': 'translate(0px,' + wScroll/2.5 + '%)'
            
        });
           $('.przesuniecie').css({
        
            'transform': 'translate(0px,' + wScroll/3 + '%)'
     });
     

      if(wScroll > $('#blog').offset().top - $(window).height()){
         var offset = Math.min(0, wScroll - $('#blog').offset().top + $(window).height() - 600);
         
         $('.post1').css({
             'transform': 'translate(' + offset + 'px,' + Math.abs(offset * 0.4) + 'px)'
         });
    
 
     
          $('.post4').css({
             'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.4) + 'px)'
         });
         
          var offset2 = Math.min(0, wScroll - $('#blog').offset().top + $(window).height() - 500);
          
           $('.post2').css({
             'transform': 'translate(' + offset2 + 'px,' + Math.abs(offset2 * 0.4) + 'px)'
         });
         
          $('.post3').css({
             'transform': 'translate(' + Math.abs(offset2) + 'px, ' + Math.abs(offset2 * 0.4) + 'px)'
         });
         
         var offset3 = Math.min(0, wScroll - $('#blog').offset().top + $(window).height() - 820);
         
         $('.post5').css({
             'transform': 'translate(' + offset3 + 'px,' + Math.abs(offset3 * 0.4) + 'px)'
         });
         
          $('.post8').css({
             'transform': 'translate(' + Math.abs(offset3) + 'px, ' + Math.abs(offset3 * 0.4) + 'px)'
         });
         
          var offset4 = Math.min(0, wScroll - $('#blog').offset().top + $(window).height() - 720);
          
           $('.post6').css({
             'transform': 'translate(' + offset4 + 'px,' + Math.abs(offset4 * 0.4) + 'px)'
         });
         
          $('.post7').css({
             'transform': 'translate(' + Math.abs(offset4) + 'px, ' + Math.abs(offset4 * 0.4) + 'px)'
         });
         
         
         var offset5 = Math.min(0, wScroll - $('#blog').offset().top + $(window).height() - 1040);
         
         $('.post9').css({
             'transform': 'translate(' + offset5 + 'px,' + Math.abs(offset5 * 0.4) + 'px)'
         });
         
          $('.post12').css({
             'transform': 'translate(' + Math.abs(offset5) + 'px, ' + Math.abs(offset5 * 0.4) + 'px)'
         });
         
          var offset6 = Math.min(0, wScroll - $('#blog').offset().top + $(window).height() - 940);
          
           $('.post10').css({
             'transform': 'translate(' + offset6 + 'px,' + Math.abs(offset6 * 0.4) + 'px)'
         });
         
          $('.post11').css({
             'transform': 'translate(' + Math.abs(offset6) + 'px, ' + Math.abs(offset6 * 0.4) + 'px)'
         });
     }
     
    
    
});


