$(window).scroll(function () {
	var heroHeight = $('.hero-text').innerHeight();
		
	if ($(window).scrollTop() > heroHeight) {
		$('#nav_bar').addClass('navbar-fixed');
	}
	if ($(window).scrollTop() < heroHeight + 1) {
		$('#nav_bar').removeClass('navbar-fixed');
	}
});


var smoothScroll = function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	      	  	$('html, body').animate({
	      	  	  scrollTop: target.offset().top - 60
	      	  	}, 1000);
	      	  	return false;
	      	}
	    }
	});
};


$(document).ready(function() {
	smoothScroll();
});