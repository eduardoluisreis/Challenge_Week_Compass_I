// Obtendo valores dos campos do formulário HTML
const userName = document.getElementById("userName");
const email = document.getElementById("userEmail");
const message = document.getElementById("message");
const sendButton = document.getElementById("sendButton");
const radioButtons = document.querySelectorAll('input[name="value-radio"]');

// Lançando um evento Listener
document.querySelector("form").addEventListener("input", function () {
	let interested;
	radioButtons.forEach(function (radioButton) {
		if (radioButton.checked) {
			interested = radioButton.value;
		}
	});

	let nameValue = userName.value.trim();
	let emailValue = email.value.trim();
	let messageValue = message.value.trim();

	// Validação
	if (nameValue === "" || emailValue === "" || messageValue === "") {
		sendButton.disabled = true;
	} else {
		sendButton.disabled = false;
	}

	if (!interested) {
		sendButton.disabled = true;
	}

	let nameValidation = nameValue.split(" ");

	if (nameValidation.length < 2) {
		sendButton.disabled = true;
		return;
	}

	let mailValidation =
		/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

	if (!mailValidation.test(emailValue)) {
		sendButton.disabled = true;
	}

	if (messageValue.length < 20) {
		sendButton.disabled = true;
		return;
	}

	saveData(interested);

	this.addEventListener("submit", function (event) {
		event.preventDefault();
		window.location.href = "/storage.html";
	});
	console.log(interest);
});

// Salvando os dados no localstorage
function saveData(interest) {
	let userNameValue = document.getElementById("userName").value;
	let emailValue = document.getElementById("userEmail").value;
	let messageValue = document.getElementById("message").value;

	// Objeto para armazenar os dados
	let data = {
		interest: interest,
		userName: userNameValue,
		email: emailValue,
		message: messageValue,
	};
	// Convertendo o objeto para uma string JSON
	let dataString = JSON.stringify(data);

	localStorage.setItem("formularioDados", dataString);
}

// Retornando os dados do localstorage
function carregarDados() {
	// Verificando dados salvos no localstorage
	if (localStorage.getItem("formularioDados")) {
		// Obtendo a string JSON dos dados salvos
		let dataString = localStorage.getItem("formularioDados");

		// Convertendo a string JSON de volta para um objeto
		let data = JSON.parse(dataString);

		// Preencha os campos do formulário com os dados salvos
		document.getElementById("userName").value = data.userName;
		document.getElementById("userEmail").value = data.email;
		document.getElementById("message").value = data.message;
	}
}
