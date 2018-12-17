$(document).ready(function(){
	$('.perm').fadeIn(1000);
	$('.press').fadeIn(2000);
	$('.media').fadeIn(3000);
	$(".drop-down").click(function(){
	$(".drop-nav").slideToggle();
	});

	$("a").on('click', function(){
		$(this).toggleClass("clicked");
	});
        
         $("#aboutButton").click(function(){
                $('html').animate({scrollTop: $(".aboutSec").offset().top}, 500);
            });
       
        $("#musicButton").click(function(){
                $('html').animate({scrollTop: $(".musicSec").offset().top}, 1000);
            });

         $("#magButton").click(function(){
                $('html').animate({scrollTop: $(".magContainer").offset().top}, 1000);
            });

          $("#socialButton").click(function(){
                $('html').animate({scrollTop: $(".socialMedia").offset().top}, 1500);
            });

          $("#scrolltopbtn").click(function(){
                 $('html').animate({scrollTop:0}, 500);
            });



$('.flipCard').click(function() {
  $(this).toggleClass("flipped");
  });


$("input").click(function(){
    $(this).removeAttr('value');
  });
 

	var slideIndex = 1;
	showSlides(slideIndex);

	function showSlides(n) {
		var slides = $(".magazineSlides");

		if (n > slides.length) {
			slideIndex = 1;
		} 
		
    	if (n < 1) {
    		slideIndex = slides.length;
    	}
		
		for (var i = 0; i < slides.length; i++) {
	        slides[i].style.display = "none"; 
	    }
	   
	   	slides[slideIndex-1].style.display = "block"; 
	
  	}

  	$(".previous").click(function(){
 	    slideIndex -= 1;
   		showSlides(slideIndex);
  	});
  	
  	$(".next").click(function(){
  		slideIndex += 1;
  		showSlides(slideIndex);
  	});




});