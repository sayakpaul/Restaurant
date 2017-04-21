


$(document).ready(function() 



{
	var title=$('.myimage').attr('title');
	var li =$('.staff').find('img');
	
	$('.myimage').css({opacity:1,});
	
	/* to change the border on focusing on the form elements */
   $('#bookonline').find('input').focusin(function(){
	   
	   $(this).css({'color':'#ffffff',});
	   
	   })
	   
	    $('bookonline').find('input').focusout(function(){
	   
	
	   $(this).css({
		   color:'#515051',border:'0px '
		   
		   
		   });
	   
	   })
	   
	   /* to change the pop up image on clicking */
	   
	   
	  $('.myimage').click(function(){
		   
		  
			   
			 $('.firstpop').animate({ opacity:1,},500);
			  $('.secondpop').animate({ opacity:0,},500);
			  $('.thirdpop').animate({ opacity:0,},500);
			   $('.fourthpop').animate({ opacity:0,},500);
			     $('.fifthpop').animate({ opacity:0,},500);
			   	$('.sixthpop').animate({ opacity:0,},500);
				$('.seventhpop').animate({ opacity:0,},500);
		   
		   }) 
		   
		   
		   
		    $('.myimage2').click(function(){
		   
		  
			   $(this).animate({opacity:1,}).siblings().css({opacity:0.6,});
			 $('.firstpop').animate({ opacity:0,},500);
			  $('.secondpop').animate({ opacity:1,},500);
			   $('.thirdpop').animate({ opacity:0,},500);
			   $('.fourthpop').animate({ opacity:0,},500);
			     $('.fifthpop').animate({ opacity:0,},500);
			   	$('.sixthpop').animate({ opacity:0,},500);
				$('.seventhpop').animate({ opacity:0,},500);
			   
		   
		   }) 
		   
		   
		   
		    $('.myimage3').click(function(){
		   
		  
			   $(this).animate({opacity:1,}).siblings().css({opacity:0.6,});
			 $('.firstpop').animate({ opacity:0,},500);
			  $('.secondpop').animate({ opacity:0,},500);
			   $('.thirdpop').animate({ opacity:1,},500);
			   $('.fourthpop').animate({ opacity:0,},500);
			     $('.fifthpop').animate({ opacity:0,},500);
			   	$('.sixthpop').animate({ opacity:0,},500);
				$('.seventhpop').animate({ opacity:0,},500);
			   
		   
		   }) 
		   
		   $('.myimage4').click(function(){
		   
		  	
			   $(this).animate({opacity:1,}).siblings().css({opacity:0.6,});
			 $('.firstpop').animate({ opacity:0,},500);
			  $('.secondpop').animate({ opacity:0,},500);
			   $('.thirdpop').animate({ opacity:0,},500);
			   $('.fourthpop').animate({ opacity:1,},500);
			     $('.fifthpop').animate({ opacity:0,},500);
			   	$('.sixthpop').animate({ opacity:0,},500);
				$('.seventhpop').animate({ opacity:0,},500);
			   
		   
		   }) 
		   
		   $('.myimage5').click(function(){
		   
		  
			   $(this).animate({opacity:1,}).siblings().css({opacity:0.6,});
			 $('.firstpop').animate({ opacity:0,},500);
			  $('.secondpop').animate({ opacity:0,},500);
			   $('.thirdpop').animate({ opacity:0,},500);
			   $('.fourthpop').animate({ opacity:0,},500);
			     $('.fifthpop').animate({ opacity:1,},500);
			   	$('.sixthpop').animate({ opacity:0,},500);
				$('.seventhpop').animate({ opacity:0,},500);
			   
		   
		   }) 
		   
		   $('.myimage6').click(function(){
		   
		  
			   $(this).animate({opacity:1,}).siblings().css({opacity:0.6,});
			 $('.firstpop').animate({ opacity:0,},500);
			  $('.secondpop').animate({ opacity:0,},500);
			   $('.thirdpop').animate({ opacity:0,},500);
			   $('.fourthpop').animate({ opacity:0,},500);
			     $('.fifthpop').animate({ opacity:0,},500);
			   	$('.sixthpop').animate({ opacity:1,},500);
				$('.seventhpop').animate({ opacity:0,},500);
			   
		   
		   }) 
		   
		   /* to change the Social Media icons on hover */
	   
	   $($('.staff').find('li')).click(function(){
		   
		   $(this).animate({opacity:1,}).siblings().css({opacity:0.6,});
		   
		   
		   })
		   
		  
		   
		   $('.facebook').mouseenter(function(){$(this).attr('src','images/fbhover.png')}).
		   mouseleave(function(){$(this).attr('src','images/fb.png')}); 
		   
		   $('.twitter').mouseenter(function(){$(this).attr('src','images/twitterhover.png')}).
		   mouseleave(function(){$(this).attr('src','images/twitter.png')});
		   
		    $('.youtube').mouseenter(function(){$(this).attr('src','images/youtubehover.png')}).
		   mouseleave(function(){$(this).attr('src','images/youtube.png')});
		   
		   $('.google').mouseenter(function(){$(this).attr('src','images//g+hover.png')}).
		   mouseleave(function(){$(this).attr('src','images//g+.png')});
		   
		   $('.message').mouseenter(function(){$(this).attr('src','images//messagehover.png')}).
		   mouseleave(function(){$(this).attr('src','images//message.png')});
	   
	   		
			
		/*   To Make the Header fixed */
	   
	  $(window).scroll(function(){
    if ($(window).scrollTop() >= 80)
	 {
		
		$('.fixedsocial').fadeOut(500);
		
		
		}
	 else 
	 
	 {
		 $('.fixedsocial').fadeIn(500)
		
		 
		 }
	 
	 }); 
	
		
    
    
	 
	 
 
    
	   
	   
	    
    
	
	

	   
});