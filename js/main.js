$(document).ready(function() {

	$("header").hide();
	$("main").hide();
	$("header").fadeIn(1500);
	$("h1").animate({top:"0em"},1100, "swing");
	$("main").show();

	$(".start").click(function() {
		var memberInputValue = getMemberInputValue();
		var clone = $(".form-container");
		for (var i = 0; i < memberInputValue - 1; i++) {
			clone.clone().appendTo(".form");
		}
		$("#started").css("height","auto");
	})

	$(".number-of-members").keypress(function(e) {
		if(e.keyCode==13)
		$(".start").click();
	})

	// #TODO; Fix multiplcation bug, possibly clone

});

function getMemberInputValue() {
	return $(".number-of-members").val(); 
}

