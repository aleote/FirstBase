 $(document).ready(function() {

 console.log("FORMS GET reached");

 $(document).on("click", "#addClassSubmit", function(){
		// event.preventDefault();

 console.log("button clicked");

   var className = $("#className").val().trim();
   console.log(className);


	var newClass = {
		className: $("#className").val(),
		description: $("#description").val(),
		endTime: "2018:12:12 12:12:12",
		instructorID: "some jerk",
		limitPpl: "30",
		enrolledPpl: "5",
		category: $("#category").val(),
		startTime: $("#startTime").val()
	}
	console.log(newClass);

	$.post("/manager/newclass", newClass)
		.then(function(data){
			console.log(data)
		})

})






  $(document).on("click", "#addInstructorSubmit", function(){
		// event.preventDefault();

 console.log("INST button clicked");


	var newInst = {
		fullName: $("#fullName").val(),
		bio: $("#bio").val(),
		teachClass: $("#teachClass").val()
		//photo: $("#photo").val()
	}

	console.log(newInst);
	$.post("/manager/newinst", newInst)
		.done(function(data){
			console.log(data)
		})

})

    $(document).on("click", "#addUserSubmit", function(){
		// event.preventDefault();

 console.log("INST button clicked");


	var newInst = {
		fullName: $("#fullName").val(),
		bio: $("#bio").val(),
		teachClass: $("#teachClass").val(),
		photo: $("#photo").val(),
	}
	console.log(newInst);

})




});//close doc ready