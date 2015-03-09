//This is for google event tracking.
jQuery( document ).ready(function() {

	$('a').on('click', function() {
		var galabel = $(this).data('galabel');
		var gatype = $(this).data('gatype');
		if(gatype !== undefined && galabel !== undefined){
			ga('send', 'event', gatype, 'click', galabel);
		}
	});

	/* Manual Event Tracking
	jQuery('#ga_logo').on('click', function() {
	  ga('send', 'event', 'image-link', 'click', 'Header - Logo');
	});
	*/
});

/*
jQuery('.ga_CLASS_NAME').on('click', function() {
	ga('send', 'event', 'EVENT_NAME', 'click', 'EVENT LABLE');
});
*/