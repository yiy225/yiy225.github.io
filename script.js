$(document).ready(function() {

	$("#pirate").remove();
	$("body").addClass("gradient");

	var clicked = false

	$("#toggle").click(function() {
		if (clicked == false) {
		$("#status").html("GO");
		$("#status").css("background-color","green");
		$("toggle").html("Stop");
		clicked = true;
	    } else {
	    $("#status").html("Stop");
		$("#status").css("background-color","red");
		$("toggle").html("Start");
		clicked = false;
	    }

	});

	$("#status").mouseenter(function() {
		if (clicked ==true) {
		$("#cat").show();
	}

    });

    $("#status").mouseleave(function() {
		if (clicked ==true) {
		$("#cat").hide();
	}

	});



});