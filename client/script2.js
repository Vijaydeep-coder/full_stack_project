const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



document.getElementById('btn1').addEventListener('click', (e) => {
	e.preventDefault()
	// console.log('as');
	const user_name = document.getElementById('name').value
	const user_email = document.getElementById('email').value
	const user_password = document.getElementById('password').value
	console.log(user_name, user_email, user_password);

	const user = {
		name: user_name,
		email: user_email,
		password: user_password
	}
	const url = `http://localhost:8082/users`
	const xhr = new XMLHttpRequest()
	xhr.open('POST', url)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.onreadystatechange = () => {
		if (xhr.status == 200 && xhr.readyState == 4) {
			 // Display signup success message
			 document.getElementById('messageTwo').innerHTML = "Sign up successful. Now you can log in.";

			 // Clear the input fields
			 document.getElementById('name').value = '';
			 document.getElementById('email').value = '';
			 document.getElementById('password').value = '';
		}
	
	
	}
	xhr.send(JSON.stringify(user))
})



// sign in 
document.getElementById('btn2').addEventListener('click', (e) => {
	e.preventDefault()
	// console.log('as');
	const user_email_signin = document.getElementById('siginemail').value
	const user_password_signin = document.getElementById('siginpwd').value

	const userSignin = {

		email: user_email_signin,
		password: user_password_signin
	}
	const url = `http://localhost:8082/users`
	const xhr = new XMLHttpRequest()
	xhr.open('GET', url)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.onreadystatechange = () => {
		if (xhr.status == 200 && xhr.readyState == 4) {
			console.log(userSignin)
			res = JSON.parse(xhr.responseText)
			for (let i = 0; i < res.length; i++) {
				if (res[i].email == user_email_signin && res[i].password == user_password_signin) {
					document.getElementById('message').innerHTML = "login successfull"
					
					window.location = 'index.html'
				
					
				}
				
				if (res[i].email == user_email_signin && res[i].password != user_password_signin) {
					document.getElementById('message').innerHTML = "invalid login !!"
				}



			}





		}

	}
	xhr.send()
})
