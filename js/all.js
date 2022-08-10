$(document).ready(function(){
    $('.content a').click(function(event){
        event.preventDefault();
    });

    $('.bug-nav-burger').click(function(event){
        $('.bug-nav a').stop().fadeToggle();
    })

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

    $('.burger').click(function(event){
        $('.nav ul').stop().slideToggle();
    })

    $('.to-top').click(function(event){
        $('body').animate({
            scrollTop: 0
        }, 700);
  });
});