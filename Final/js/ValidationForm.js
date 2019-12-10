
		var el = function(element) {
			return document.getElementById(element);
		}
		
		var isEmail = function(email) {
			var emailPattern = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
			if (emailPattern.test(email))
				return true;
			else
				return false;
		}
		var isName = function(name) {
			var validName = /^[a-zA-Z ]+$/;
			if (validName.test(name))
				return true;
			else
				return false;
		}
		
		var validateForm = function(e) {
			var isValid = true;
			
			if (!isName(el("name").value))
			{
				alert("The name you have entered is not valid");
				isValid = false;
			}
			else if(el("name").value === "")
			{
				alert("Please enter a name");
				isValid = false;
			}
			 
			if (!isEmail(el("email").value)) 
			{
				alert("The email you have entered is not valid");
				isValid = false;
			}
			else if(el("email").value === "")
			{
				alert("Please enter a valid email");
				isValid = false;
			}
			if(el("Hyundai_Elantra_Sport").checked == false && el("Hyundai_Elantra_GT_Sport").checked == false && el("Kia_Forte_1.6").checked == false && el("Hyundai_Veloster_N_Line").checked == false)
			{
				alert("Please select a car");
				isValid = false;
			}
			if (!isValid) {
				e.preventDefault();
			}
		}
				
		window.onload = function() {
			el("submit").addEventListener("click", validateForm, false);
		}
