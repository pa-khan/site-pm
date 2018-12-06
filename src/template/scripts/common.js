$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var photos = $('.slider');
	photos.slick();

	// var certificates = $('.certificates__list');
	// certificates.slick({
	// 	slidesToShow: 4
	// });

	new WOW().init();
});
