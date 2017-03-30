var j = jQuery.noConflict();

j( document ).ready(function() {
   // Banner 
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
		autoplay: 2500,
        autoplayDisableOnInteraction: true,
		breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
		
	j(".swiper-container").hover(function(){
		swiper.stopAutoplay();
	}, function(){
		swiper.startAutoplay();
	});

    // Brand show 
    var swiper = new Swiper('.swiper-container-brand', {
        pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 30,
		autoplay: 2500,
        autoplayDisableOnInteraction: true,
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
		
	j(".swiper-container-brand").hover(function(){
		swiper.stopAutoplay();
	}, function(){
		swiper.startAutoplay();
	});
}); 