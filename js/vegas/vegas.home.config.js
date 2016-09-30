/*  
	--------------------------------------------------------------
	Custom Javascript - Project: Agora Template
	Description: Html / Css / jQuery template
	Author: pezflash - http://www.themeforest.net/user/pezflash
	Version: 1.5
    --------------------------------------------------------------
*/



//////////////////////////////////////////////////////////////////
//DOCUMENT READY
$(document).ready(function() {

	//CUSTOM CONFIGURATION (SETUP: true/false)
	var autoSlideOnInit = false;
	var preloadBackgrounds = false;
	var slideshowDelay = 5000;



	//////////////////////////////////////////////////////////////////
	//STORING ELEMENTS - VARS
	//DON'T EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING
	var slideshow = $('#slideshow');
	var tl = $('#home .thumbs ul li');
	var ta = $('#home .thumbs ul li a');
	var ti = $('#home .thumbs ul li img');

	

	//////////////////////////////////////////////////////////////////
	//VEGAS PLUGIN (FULLSCREEN GALLERY) CONFIGURATION
	var slideshowRunning = false;
	var backgroundList = [];

    ta.each( function() { 
        backgroundList.push( { 
            src: $(this).attr('href'),
            valign: $(this).data('valign'),
            align: $(this).data('align'),
			fade: 2000
         } );
     } );
		
    $.vegas(backgroundList[0])('overlay')('pause');
	
	slideshow.click(function() { 
		
		//START SLIDESHOW
	  	if (slideshowRunning == false) { 
			slideshowRunning = true;
					
					slideshow.attr('src', 'images/home/pause.png');
					slideshow.attr('title', 'Stop slideshow');
					
					$.vegas('slideshow', { 
						delay: slideshowDelay,
						backgrounds: backgroundList
					})
					
		//STOP SLIDESHOW
		} else { 
			slideshowRunning = false;
					
			slideshow.attr('src', 'images/home/play.png');
			slideshow.attr('title', 'Play slideshow');
					
			$.vegas('pause');  
		}
         return false;
	});

    ta.click(function() { 
	
		slideshowRunning = false;

		slideshow.attr('src', 'images/home/play.png');
		slideshow.attr('title', 'Play slideshow');

		var idx = $(this).parent('li').index();
		$.vegas('stop')(backgroundList[idx]);
		 
		return false;
	});
	
	//PRELOAD
	if (preloadBackgrounds == true) $.vegas('preload', backgroundList);
		
	//AUTOSLIDESHOW ON INIT
	if (autoSlideOnInit == true) {
		slideshowRunning = true;
		slideshow.attr('src', 'images/home/pause.png');
		slideshow.attr('title', 'Stop slideshow');

		$.vegas('slideshow', { 
			delay: slideshowDelay,
			backgrounds: backgroundList
		})
	};


	//BACKG COLOR ON ACTIVE THUMB - MOUSEOVER / MOUSEOUT
	$('body').bind('vegasload', function(e, bg) {
		var src = $(bg).attr('src').replace('background', 'thumbnail');
		ti.css('opacity', '1');
		$('img[src="' + src + '"]').css('opacity', '0');
	});

	var currentThumb = $('#home .thumbs a:first img')[0];

	ti.click(function() {
		currentThumb = this;
	});

	ti.mouseover(function() {
		$(this).css('opacity', '0');
	});

	ti.mouseout(function() {
		if (this != currentThumb) {
			$(this).css('opacity', '1');
		}
	});

	//TIPSY TOOLTIP
	slideshow.tipsy({ gravity: 'w', fade: true, offset: 5 });

});




