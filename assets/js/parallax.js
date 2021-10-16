(function($) {

	var parallaxe = function() {
		var image$ = $('.para-image');
		$(window).on('scroll', function(e) {
			var distance = $(document).scrollTop() * 0.1;
			image$[0].style['transform'] = 'translate(0px, ' +distance+ 'px)';
			image$[0].style['-webkit-transform'] = 'translate(0px, ' +distance+ 'px)';
		});
	};

	$(document).ready(function() {
		parallaxe();
	})

})(jQuery);
