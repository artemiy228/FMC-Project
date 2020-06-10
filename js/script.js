$(document).ready(function () {
	$('.carousel__inner').slick({
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		// dots: true,
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/Rounded.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/slider/Rounded2.png"></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: false,
				arrows: false
			}
		}]
	});
});