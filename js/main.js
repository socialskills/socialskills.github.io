(function($) {
    'use strict';

    $(document).ready(function() {

    	/* Swipebox Lightbox Plugin
    	==========================================*/
		$( '.swipebox' ).swipebox();


    	/* Sticky Header
    	==========================================*/
		$('#sticky').scrollToFixed();


    	/* Animated Placeholders
    	==========================================*/
		Placeholdem( document.querySelectorAll( '[placeholder]' ) );


    	/* OwlCarousel Homepage and similar posts 
    	==========================================*/
		$(window).resize( function(){
			$(".slider").owlCarousel({
				items: 3,
			    nav: false,
				responsive: true,
				lazyLoad: true,
				autoPlay : 5000,
				stopOnHover: true,
			});
		});
		$(window).resize();
		
    	/* OwlCarousel Gallery Post
    	==========================================*/
		$(".post__gallery").owlCarousel({

			navigation : false,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true

			// "singleItem:true" is a shortcut for:
			// items : 1, 
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false

		});

		/* OwlCarousel Twitter 
    	==========================================*/
		$(".twitter-feed").owlCarousel({
			paginationSpeed : 400,
			singleItem: true,
			autoPlay : 4000,
			stopOnHover: true,
		});


        $(".parallax-slider").skippr();

        $('.parallax-slider__slide').parallax("50%", 0.3);
        $('.parallax-slider__slide h2').parallax("50%", 0.1);

		/* Fade elements while scrolling
		================================================= */
		jQuery(function($) {
			var divs = $('.fade-that');
			var divsCapt = $('.animate');
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				divs.css({ 
					'opacity' : 0.15 + st/800,
				}); 
				divsCapt.css({ 
					'transform' : 'translateY(' + 0 + st/4 +'px)',
					'-webkit-transform' : 'translateY(' + 0 + st/4 +'px)',
				}); 
			});
		});


		/* Search Input 
    	==========================================*/
		$('#header-search').blur(function(){
    		$('.main-header__search').removeClass("focus");
    	}).focus(function() {		
    	    $('.main-header__search').addClass("focus");
    	});

    	$(function(){
			var submenu = $('.submenu-link');
			var submenuList = $('.mobile-menu__list ul');

			submenu.click(function(){
				if ( submenu.hasClass('selected') ) {
					$(this).find(submenuList).hide();
					submenu.removeClass('selected');
				}
				else {
					$(this).find(submenuList).show();
					submenu.addClass('selected');
				}
			});
		});    


		/* Post Parallax and some maths to make it fullheight
    	=====================================================*/
		$('.post__image--fullwidth').parallax("50%", 0.4);


		$(function(){

			var browserWidth = $( window ).width();

			var postImg = $('.post__image--fullwidth');
			var headerHeight = $('.main-header__top').height() + $('.main-header__logo').outerHeight() + $('.main-header__navigation').height();
			var postImgHeight = $(window).height() - headerHeight

			if ( browserWidth >= 768 ) {
				postImg.css('height',postImgHeight + 'px')
			}
			else {
				postImg.css('height',postImgHeight + 'px')
			}

		});


		/* Nice looking Youtube Posts 
		=============================================*/
		$('.yt_container').prettyEmbed({
		    previewSize: 'hd',           // use either this option...
		    customPreviewImage: '',      // ...or this option

		    // Embed controls
		    showInfo: false,
		    showControls: true,
		    loop: false,

		    colorScheme: 'dark',
		    showRelated: false,

		    useFitVids: true
		});


		/*	Toggle (FAQ)
		/*----------------------------------------------------*/
	 
	    // Find the toggles and hide their content
	    $('.toggle').each(function(){
	        $(this).find('.toggle-content').hide();
	    });
	 
	    // When a toggle is clicked (activated) show their content
	    $('.toggle a.toggle-trigger').click(function(){
	        var el = $(this), parent = el.closest('.toggle');
	 
	        if( el.hasClass('active') )
	        {
	            parent.find('.toggle-content').slideToggle();
	            el.removeClass('active');
	        }
	        else
	        {
	            parent.find('.toggle-content').slideToggle();
	            el.addClass('active');
	        }
	        return false;
	    });
	 



		/*	Notification Boxes
		/*----------------------------------------------------*/
		$('.close').click(function(){
			$(this).parent().fadeOut('slow');
		});


		/*	Tabs
		/*----------------------------------------------------*/
		$("#tabs li").click(function() { 
		
			var this_tmp = $(this);  
			
			$("#tabs li").removeClass('active');   
			$(this).addClass("active");        
			$(".tab_content:visible").fadeOut(300, function(){            
				
				var selected_tab = this_tmp.find("a").attr("href");            
				$(selected_tab).fadeIn(300);        
			});  
			
			return false;    
		});


		/*	Accordions with contents
		/*----------------------------------------------------*/
		$(function() {
		    var accList = $('.accordion li p')
		    var accLink = $('.accordion li a') 
			var accExpanded = $('.expand')		
		    
		    accList.hide();
			accExpanded.show();
		    accLink.click(function(e) {
		        e.preventDefault();
		        if(!$(this).hasClass('active')) {
		            accLink.removeClass('active');
		            accList.filter(':visible').slideUp('normal');
		            $(this).addClass('active').next().stop(true,true).slideDown('normal');
		        } else {
		            $(this).removeClass('active');
		            $(this).next().stop(true,true).slideUp('normal');
		        }
		    });
		});

    });

} (jQuery));
