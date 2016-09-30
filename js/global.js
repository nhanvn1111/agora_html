/*  
	--------------------------------------------------------------
	Custom Javascripts - Project: Agora Template
	Description: Html / Css / jQuery template
	Author: pezflash - http://www.themeforest.net/user/pezflash
	Version: 1.5
    --------------------------------------------------------------
*/



//////////////////////////////////////////////////////////////////
//DOCUMENT READY
$(document).ready(function() {



	//////////////////////////////////////////////////////////////////
	//DETECT MOBILES & TABLETS (ANDROID & IOS)
	var android = DetectAndroid();
	var ios = DetectIos();
	if (android == true || ios == true) {

		//HIDE STAGE BORDER
		var arr = [ 'top', 'right', 'bottom', 'left' ];
		jQuery.each(arr, function() {
			$("#" + this).css('display', 'none');
		});

		//HIDE OVERLAY PATTERN ON VEGAS BACKGROUNDS
		$('.vegas-overlay').css('display', 'none');
	}




	//////////////////////////////////////////////////////////////////
	//SUPERFISH MULTILEVEL MENU
	$('ul.sf-menu').superfish({ 
		animation: {height:'show', opacity:'show'},
		speed: 700,			// speed of displaying
		autoArrows:  true,	// arrows on submenu items
		delay: 1000     	// delay on mouseout
	}); 
	
	
	
	
	//////////////////////////////////////////////////////////////////
	//GLOBAL BACKGROUND FADE IN ANIMATION
	var backg = $('#backg');
	backg.animate({ opacity: 0 }, 0);
	backg.delay(1000).animate({ opacity: 1 }, 1000, 'easeOutQuart');



	
	//////////////////////////////////////////////////////////////////
	//TIPSY - GLOBAL TOOLTIPS
	$('#header a img').tipsy({ gravity: 'n', fade: true, offset: 8 });
	$('#footer a').each(function() { 
		 $(this).tipsy({ gravity: 'se', fade: true, offset: 10 });
	});
	
	


	//////////////////////////////////////////////////////////////////
	// PRETTYPHOTO LIGHTBOX GALLERY
	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools:false,
		theme:'agora'
	});





	//////////////////////////////////////////////////////
	//CUSTOM FUNCTIONS
	//GENERATE HOVER ICONS
	generateHover = function(e) {
		e.append("<span></span>");
		e.hover(function() {
			$(this).children("span").stop(true, true).fadeIn(600);
		},function(){
			$(this).children("span").stop(true, true).fadeOut(200);
		});
	};


	
	
	
	//////////////////////////////////////////////////////
	//CONTACT FORM STUFF
	showLoader = function() {
		$('#loader_icon').fadeIn("slow");
	};
			 
	checkStatus = function(status) {
		$('#loader_icon').fadeOut("slow");
		document.getElementById('ajax_loader').innerHTML = status;
	};
	
});




