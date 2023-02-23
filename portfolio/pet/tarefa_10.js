function validaForm(){
	let validaPet = document.forms["cadastrar"]["pet"].value;
	let validaNom = document.forms["cadastrar"]["nome"].value;	
	let validaTel = document.forms["cadastrar"]["telefone"].value;
	let validaDia = document.forms["cadastrar"]["dia"].value;

	if (validaPet == ""){
		alert("O nome do Pet deve ser preenchido!");
		return false;
	}
	if (validaNom == ""){
		alert("A Nome deve ser preenchido!");
		return false;
	}
	if (validaTel == ""){
		alert("O Telefone deve ser preenchido!");
		return false;
	}
	if (validaDia == ""){
		alert("A Data deve ser preenchido!");
		return false;
	}
}

function insere(){
	let pet = document.forms["cadastrar"]["pet"].value;
	let nom = document.forms["cadastrar"]["nome"].value;	
	let tel = document.forms["cadastrar"]["telefone"].value;
	let dia = document.forms["cadastrar"]["dia"].value;


	let inserir = window.document.getElementById("novoAgendamento");
	inserir.innerHTML = `<td>${pet}</td>`;
	inserir.innerHTML += `<td>${nom}</td>`;
	inserir.innerHTML += `<td>${tel}</td>`;
	inserir.innerHTML += `<td>${dia}</td>`;
}