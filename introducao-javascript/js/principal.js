//Buscando todos os elementos com a classe "paciente"
var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo");
//Exibindo o array de elementos
console.log(pacientes);


//Laço de repetição que tem início em zero e vai até a quantidade do array de elementos pacientes
for(var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i]; //Atribui o paciente atual á variável paciente;

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	if (validarImc(peso,altura)){
		var imc = peso/(altura * altura);
		tdImc.textContent = imc.toFixed(2);
		console.log(imc);
	}
	else {
		paciente.classList.add("paciente-invalido");
		tdImc.textContent = "Altura ou peso inválido!";
		console.log("IMC Inválido!");
	}
}

//Função para validar se o Imc é possível de ser calculado
function validarImc(peso,altura){
	if ((peso > 0 && peso < 1000) && (altura > 0 && altura < 3.00)){
		return true;
	}
	else{
		return false;
	}
}

//Calcular imc
function calcularImc(peso,altura){
	if(validarImc(peso,altura)){
		var imc = peso/(altura * altura);
		return imc.toFixed(2);
	}
	else {		
		console.log("Peso ou altura inválidos!");
		return 0;
	}
}

function validarPaciente(paciente){
	if(validarImc(paciente.peso,paciente.altura) && paciente.nome.length > 0){
		return true;
	}
	else {
		return false;
	}
}