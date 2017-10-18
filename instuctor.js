$("#instructor").on("click", function() {
	var password = $("#newPassword").val();
	var passwordVerify = $("#password2").val();
	if (password !== passwordVerify) {
		alert("Password must match, please re-enter")
	} else {
		var createUser = {
			fname: $("#fname").val(),
			lname: $("#lname").val(),
			email: $("#email").val(),
			phone: $("#phoneNum").val(),
			username: $("#username").val(),
			password: $("#newPassword").val()
		}
		console.log(createUser);
		$.post("/user/register", createUser)
			.done(function(data) {
				console.log(data)
			})
	}
});