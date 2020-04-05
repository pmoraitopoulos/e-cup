$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	$('#nav-bar').css({
		opacity: function(){
	  		var elementHeight = $(this).height(),
	    	opacity = ((elementHeight - scrollTop) / elementHeight);
	    	return opacity;
		}
	});
	console.log('HEy');
	console.log('DUDE');
	$("#nav-bar").css('display : none;');
});


