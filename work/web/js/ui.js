$(document).ready( function() {
	// debugging code
	var debugText = "It works!";
	var windowWidth = $(window).width();

	if( windowWidth<500 ) {
		$("#navToggle").css("display", "block");
		$("nav").hide();
	}
	
	$("#navToggle").click( function() {
		$("nav").slideToggle(200); //slide toggle for 1 sec
	});
	
	$(window).resize( function() {
		var windowWidth = $(window).width();
		if (windowWidth>750) {
			$("#navToggle").css("display", "none");
			$("nav").show();
		} else{
			$("#navToggle").css("display", "block");
			$("nav").hide();
		}
	});
});