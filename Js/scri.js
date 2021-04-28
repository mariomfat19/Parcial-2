/* Activadpr de jQuery */
$(document).ready(function(){

    // Activador de Slick-Slider para el Banner de Imágenes
    $('.slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaysppeed: 3000,
        speed: 300,
        arrows: true,
        fade: true,
        pauseOnHover: false
    });

    // Activador de Slick-Slider para el Banner de Testimonios
    $('.slick-testimonios').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaysppeed: 3000,
        speed: 300,
        arrows: true,
        fade: false,
        pauseOnHover: false
    });

    $(document).ready(function(){

  
    });

    $(document).ready(function(){

        // Activación de transición del menú principal
        $('aside#menu-hamburguesa nav a, header article nav a').bind('click',function(event){
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000,'easeOutExpo');
            event.preventDefault();
        });
    
    
    });

});