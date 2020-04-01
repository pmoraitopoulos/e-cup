//Navigation Bar Scrolling on Point

//Press on "Logo"
$("#logoScroll").click(function(){
	 $('html,body').animate({
	 	scrollTop: $("#header").offset().top},
	 	'slow');
});

//Press on "Products"
$("#products").click(function(){
	 $('html,body').animate({
	 	scrollTop: $("#header").offset().top},
	 	'slow');
});

//Press on "Cup Ecosystem"
$("#guide").click(function(){
	 $('html,body').animate({
	 	scrollTop: $(".eco-container").offset().top},
	 	'slow');
});


//Press on "Available Locations"
$("#locations").click(function(){
	 $('html,body').animate({
	 	scrollTop: $(".location-mapping").offset().top},
	 	'slow');
});

//Press on "About Us"
$("#info").click(function(){
	 $('html,body').animate({
	 	scrollTop: $(".info-container").offset().top},
	 	'slow');
});