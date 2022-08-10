$(document).ready(function(){
    $('.content a').click(function(event){
        event.preventDefault();
    });
    

    $('.navbar a').click(function(event){

        var target = $(this).attr('href');
        var t = target.split('html');
        var targetPos = $(t[1]).offset().top;
        
        $('body').animate({scrollTop: targetPos -56}, 700)
        //Navbar height = 56px
    });

    $('.nav li a').hover(function(event){
        $(this).toggleClass('active');
        
    })

    $('.to-top').click(function(event){
        $('body').animate({
            scrollTop: 0
        }, 700);
  });
});