$(document).ready(function() {

	$(".start").click(function() {
		var memberInputValue = getMemberInputValue();
		var clone = $(".form-container");
		for (var i = 0; i < memberInputValue - 1; i++) {
			clone.clone().appendTo(".form");
		}
	})

	$(".number-of-members").keypress(function(e) {
		if(e.keyCode==13)
		$(".start").click();
	})

});

function getMemberInputValue() {
	return $(".number-of-members").val(); 
}

