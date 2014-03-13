$(document).ready( function() {
	// debugging code
	var debugText = "It works!";
	var windowWidth = $(window).width();

	if( windowWidth<765 ) {
		$("#navToggle").css("display", "block");
		$("nav").hide();
	}
	else {
		$("#navToggle").css("display", "none");
		$("nav").show();
	}
	
	$("#navToggle").click( function() {
	$("nav").slideToggle(200); //slide toggle for 1 sec
	});
	
	$(window).resize( function() {
		var windowWidth = $(window).width();
		if (windowWidth>765) {
			$("#navToggle").css("display", "none");
			$("nav").show();
		} else{
			$("#navToggle").css("display", "block");
			$("nav").hide();
		}
	});
});