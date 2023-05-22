let name1 = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let interest = document.getElementById("interest");

let dataString = localStorage.getItem("formularioDados");
let data = JSON.parse(dataString);

name1.textContent = data.userName;
email.textContent = data.email;
message.textContent = data.message;
interest.textContent = data.interest;
