$(document).ready(function(){
	$(".class").on("click", function(){
			console.log("------------------adding class----------------")
			var classId = $(this).data("id");
			var className = $(this).data("class");
			 
			var newClass = {
				class: classId,
				classname: className
			}
			console.log(classId)
			$.post("/classes/add", newClass)
				.done(function(data){
					console.log(data)
				})
	})

	$(document).on("click", "#submitClass", function(){
		var getId = $(this).data("id");
		var added = "#added" + getId;
		var classItem = $(this).data("item");
		$(added).html("ADDED");
		$(added).css("color", "black");
	})
})




