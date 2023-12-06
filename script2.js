let submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', () => {
	let inputEmail = document.querySelector('.inputEmail')
	let inputLogin = document.querySelector('.inputLogin')
	let inputPassword = document.querySelector('.password')
	let passwordConfirm = document.querySelector('.passwordConfirm')
	let email = inputEmail.value
	let login = inputLogin.value
	let password = inputPassword.value

	if (passwordConfirm.value !== inputPassword.value) {
		document.querySelector('.password').style.border = '3px solid red'
		document.querySelector('.passwordConfirm').style.border = '3px solid red'
		document.querySelector('.alert4').style.display = 'block'
		document.querySelector('.alert5').style.display = 'block'
		return false
	} else if (!email.includes('@gmail.com')) {
		document.querySelector('.inputEmail').style.border = '3px solid red'
		document.querySelector('.alert1').style.display = 'block'
		document.querySelector('.alert4').style.display = 'block'
		return
	} 
	else if (login.charAt(0) !== login.charAt(0).toUpperCase()) {
		document.querySelector('.inputLogin').style.border = '3px solid red'
		document.querySelector('.alert2').style.display = 'block'
		return 
	}
	 else if (password.length < 10) {
		document.querySelector('.password').style.border = '3px solid red'
		document.querySelector('.passwordConfirm').style.border = '3px solid red'
		document.querySelector('.alert3').style.display = 'block'
		document.querySelector('.alert4').style.display = 'block'
		return
	}
	 else {
		window.location.href = './index.html'
	}
})

let showPasswordButtons = document.querySelectorAll('.show-password-btn')

showPasswordButtons.forEach(function (button) {
	button.addEventListener('click', showPassword)
})

let inputPassword3 = document.querySelector('.password')
let inputPasswordConfirm = document.querySelector('.passwordConfirm')

const TIME_SHOW_PASSWORD = 1000

function showPassword() {
	inputPassword3.type = 'text'
	setTimeout(function () {
		inputPassword3.type = 'password'
	}, TIME_SHOW_PASSWORD)
	inputPasswordConfirm.type = 'text'
	setTimeout(function () {
		inputPasswordConfirm.type = 'password'
	}, TIME_SHOW_PASSWORD)
}
