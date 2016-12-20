$(function() {
	$('.carousel.carousel-slider').carousel({
		full_width: true
	});
	$('.scrollspy').scrollSpy();
	$("#nav-mobile li").click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	$(".choose li").on('click', function() {
		var _index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".pics").eq(_index).addClass('active').siblings().removeClass('active')
	})
	$(".duiyuan").on('mouseenter',function(){
		$(this).children().eq(1).fadeIn();
		$(this).children().eq(2).addClass('active');
		$(this).siblings().children().eq(2).removeClass('active');
	})
	$(".duiyuan").on('mouseleave',function(){
		$(this).children().eq(1).hide();
		$(this).children().eq(2).removeClass('active');
	})
})