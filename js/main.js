$(document).on('ready', function(){

	if (5 > 10) {   console.log("You'll never see this in the console because 5 is not greater than 10"); }

	if (5 < 10) {   console.log('But you will definitely see this'); }

	// attach click event to js-menu
	$('.js-menu').on('click', function(){
		// do things
		$('.nav-main').slideToggle();
	});

	$(window).on('resize', function(){
		var w = $(window).width();
		console.log('I am resizing!!!' + w);

	// write an if statement, if width > 420, do something
	if(w > 480 && $('.nav-main').is('[style]')){
		console.log('removed style');
		$('.nav-main').removeAttr('style');
	}

	});
	// attach click event to main-nav item
	$('.nav-main a').on('click', function(event){
		console.log(event);
		event.preventDefault();

		$('.nav-main a').removeClass('is-current');
		// this refers to the DOM element being operated on
		$(this).addClass('is-current');
		// $(this) is just 'this', wrapped in a jQuery selector

 		console.log($(this).attr('href'));
 		// store $(this).attr('href') in a variable
 		var pageToScrollTo = $(this).attr('href');
 		// use that variable in our $.scrollTo() function
 		$(window).scrollTo(pageToScrollTo, 5000);
	});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	alert("Booooooo Phillies!");
	
});

});