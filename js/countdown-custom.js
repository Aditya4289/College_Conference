(function($) {	
	'use strict';
    
    var year = 2024;
    var month = 7;
    var date = 15;
    var time = 0;
    
    month = month - 1;
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({until: new Date(year, month, date, time)});
    });
})(jQuery);

