

jQuery(function($) {
            function close_accordion_section() {
                $('.accordion .accordion-section-title').removeClass('programMenuActive');
                $('.accordion .accordion-section-content').slideUp(300).removeClass('programMenuOpen');
				$('.accordion .accordion-section-title').find('span').removeClass('rotate-program-accordion-doit');
            }

            $('.accordion-section-title').click(function (e) {
                // Grab current anchor value
                var selfAttrValue = $(this).attr('title');

                if ($(e.target).is('.programMenuActive')) {
                    close_accordion_section();
//                 e.preventDefault();                    
                } else {
                    close_accordion_section();
                    // Add programMenuActive class to section title
                    $(this).addClass('programMenuActive');
                    // programMenuOpen up the hidden content panel
                    $('.accordion ' + '#' + selfAttrValue).slideDown(300).addClass('programMenuOpen');
	                  // rotate the icon
	                 $(this).find('span').addClass('rotate-program-accordion-doit');
                  
                }
//                 e.preventDefault();
            });
    });
