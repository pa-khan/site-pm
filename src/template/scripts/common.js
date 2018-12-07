$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var photos = $('.slider');
	photos.slick();

	var certificates = $('.certificates__list');
	certificates.slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 1225,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 690,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	// slider
  var partners = $('.partners__list');
  settings_slider = {

  }
  slick_on_mobile( partners, settings_slider);

  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };

	new WOW().init();
});
