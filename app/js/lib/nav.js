$(window).scroll(function () {
	var heroHeight = $('.hero-text').innerHeight();
		
	if ($(window).scrollTop() > heroHeight) {
		$('#nav_bar').addClass('navbar-fixed');
	}
	if ($(window).scrollTop() < heroHeight + 1) {
		$('#nav_bar').removeClass('navbar-fixed');
	}
});
