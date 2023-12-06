
	function generateRandomNumbers() {
		let button1 = document.querySelector('.card_number')
		let random1 = Math.floor(Math.random() * 9000) + 1000
		let random2 = Math.floor(Math.random() * 9000) + 1000
		let random3 = Math.floor(Math.random() * 9000) + 1000
		let random4 = Math.floor(Math.random() * 9000) + 1000
		button1.innerHTML = random1 + ' ' + random2 + ' ' + random3 + ' ' + random4
	}

	function generateRandomNumbersCV() {
		let button2 = document.querySelector('.card_cv')
		let random5 = Math.floor(Math.random() * 900) + 100
		button2.innerHTML = 'CVV ' + random5
	}

	function dateType() {
		let inputDate = document.querySelector('.input_date-block')
		let outputDate = document.querySelector('.card_data')
		let selectedDate = inputDate.value
		outputDate.innerHTML = selectedDate
	}

	function userDataType() {
		let inputName = document.querySelector('.inputName')
		let outputName = document.querySelector('.card_name')
		let inputSurname = document.querySelector('.inputSurname')
		let outputSurname = document.querySelector('.card_surname')
		outputName.innerHTML = inputName.value
		outputSurname.innerHTML = inputSurname.value
	}

	function validateData() {
		let checkButton = document.querySelector('.checkButton')
		let myCheckbox = document.querySelector('.myCheckbox')
		let inputName2 = document.querySelector('.inputName').value
		let inputSurname3 = document.querySelector('.inputSurname').value
		let inputDate4 = document.querySelector('.input_date-block').value

		if (inputName2 && inputSurname3 && inputDate4 && myCheckbox.checked) {
			document.querySelector('.modalWindow').style.transform = 'translateY(0)'
		} else {
			alert(
				'Not all data is entered or checkbox is not checked. Please fill in all fields and check the checkbox.'
			)
			return false
		}
	}

	let closeModalWindow = document.querySelector('.close-modalWindow')
	closeModalWindow.addEventListener(
		'click',
		() =>
			(document.querySelector('.modalWindow').style.transform =
				'translateY(-1000px)')
	)

// 	let submitButton = document
// 		.querySelector('.submitButton')
// 		.addEventListener('click', () => {
// 			let inputEmail = document.querySelector('.inputEmail')
// 			let inputLogin = document.querySelector('.inputLogin')
// 			let inputPassword = document.querySelector('.password')
// 			let passwordConfirm = document.querySelector('.passwordConfirm')

// 			let email = inputEmail.value
// 			let login = inputLogin.value
// 			let password = inputPassword.value

// 			if (passwordConfirm.value !== inputPassword.value) {
// 				document.querySelector('.password').style.border = '3px solid red'
// 				document.querySelector('.passwordConfirm').style.border =
// 					'3px solid red'
// 				document.querySelector('.alert4').style.display = 'block'
// 				document.querySelector('.alert5').style.display = 'block'
// 				return false
// 			} else if (!email.includes('@gmail.com')) {
// 				// alert('Email must be a valid Gmail address');
// 				document.querySelector('.inputEmail').style.border = '3px solid red'
// 				document.querySelector('.alert1').style.display = 'block'
// 				document.querySelector('.alert4').style.display = 'block'
// 				return
// 			} else if (password.length < 10) {
// 				document.querySelector('.password').style.border = '3px solid red'
// 				document.querySelector('.passwordConfirm').style.border =
// 					'3px solid red'
// 				document.querySelector('.alert3').style.display = 'block'
// 				document.querySelector('.alert4').style.display = 'block'
// 				return
// 			} else if (login.charAt(0) !== login.charAt(0).toUpperCase()) {
// 				document.querySelector('.inputLogin').style.border = '3px solid red'
// 				document.querySelector('.alert2').style.display = 'block'
// 				return
// 			} else {
// 				window.location.href = './index.html'
// 			}
// 		});

// 	let showPasswordButtons = document.querySelectorAll('.show-password-btn')

// 	showPasswordButtons.forEach(function (button) {
// 		button.addEventListener('click', showPassword)
// 	})

// 	let inputPassword3 = document.querySelector('.password')
// 	let inputPasswordConfirm = document.querySelector('.passwordConfirm')

// 	const TIME_SHOW_PASSWORD = 1000

// 	function showPassword() {
// 		inputPassword3.setAttribute('type', 'text')
// 		setTimeout(function () {
// 			inputPassword3.setAttribute('type', 'password')
// 		}, TIME_SHOW_PASSWORD)
// 		inputPasswordConfirm.setAttribute('type', 'text')
// 		setTimeout(function () {
// 			inputPasswordConfirm.setAttribute('type', 'password')
// 		}, TIME_SHOW_PASSWORD)
// 	}
// })
