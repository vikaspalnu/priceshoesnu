var j = jQuery.noConflict();

j( document ).ready(function() {
   // Banner 
  var swiper = new Swiper('.banner', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 10,
		autoplay: false,
        effect:'fade',
        autoplayDisableOnInteraction: true,
		breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
		
	j(".banner").hover(function(){
		swiper.stopAutoplay();
	}, function(){
		swiper.startAutoplay();
	});

    // Brand show 
    var swiper = new Swiper('.brand', {
        slidesPerView: 8,
        paginationClickable: true,
        spaceBetween: 10,
		autoplay: 2500,
        autoplayDisableOnInteraction: true,
		breakpoints: {
            1024: {
                slidesPerView: 8,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
		
	j(".brand").hover(function(){
		swiper.stopAutoplay();
	}, function(){
		swiper.startAutoplay();
	});

    // Catlog 
    var swiper = new Swiper('.catlog', {
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
		autoplay: false,
        autoplayDisableOnInteraction: true,
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // zapatos
    var swiper = new Swiper('.zapatos', {
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
		autoplay: false,
        autoplayDisableOnInteraction: true,
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    
    //estilos 
    var swiper = new Swiper('.estilos', {
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
		autoplay: false,
        autoplayDisableOnInteraction: true,
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
}); 