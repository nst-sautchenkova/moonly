//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');
});


/*MENU*/
$(document).on("ready", function () {
    $("#menu .cd-nav-trigger").click(function () {
        $("#menu").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('#menu .bar').toggleClass('animate');
		$("body").toggleClass("open-menu");
    });
	
});


//anchor
jQuery(document).ready(function(){
	$(".anchor").on("click", function (event) {
		$('this').addClass("active");
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 150}, 800);
		$('.anchor').removeClass("active");
		$(this).addClass("active");
		
	});
});


//	accordion
$(document).on("ready", function () {
	$(".faq-accordion .item").click(function () {
		$(".faq-accordion .item").removeClass('active');
		$(this).addClass('active');
		$(".faq-accordion .item.active .panel").slideToggle(300);
		
	});
	
});	



$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.js-animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
});


