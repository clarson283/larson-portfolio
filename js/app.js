$(document).ready(function () {

    $('.navbar-brand').click(function () {
    	alert('hi');
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });



	//smooth scrolling section - works
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});


	$(window).scroll(function() {

		if ($(this).scrollTop() > 1){  
    		$('header').addClass("sticky");
  		}	
  		else{
    		$('header').removeClass("sticky");
  		}
	});

});