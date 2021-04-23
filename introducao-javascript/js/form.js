var adicionar = document.querySelector("#adicionar-paciente");
//Adicionando um escutador de eventos.
//Onde quando for realizado um click sobre o elemento, será executada a função anônima
adicionar.addEventListener("click",function (event){
	event.preventDefault();

	//Pegando valores dos campos do formulário
	var form = document.querySelector("#form-adiciona");
	var paciente = getValuesInputs(form);
	if(validarPaciente(paciente)){
		addPacienteTabela(paciente);
		form.reset();
	}
	else {
		alert("Paciente inválido. Por favor, verificar se todos os campos foram preenchidos corretamente.");
	}
});

function addPacienteTabela(paciente){
	//Criando a Tr do paciente
	var pacienteTr = createTr(paciente);		
	//Pegando o elemento com o seletor de id
	var tabela = document.querySelector("#tabela-pacientes");
	//Colocando como filho o elemento recém-criado "pacienteTr" com a função appendChild();
	tabela.appendChild(pacienteTr);
}

function getValuesInputs(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value
	}
	return paciente;
}

function createTr(paciente){
	//Criando o elementos via javascript com a função createElement()
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	//Colocando os elementos recém-criados como "filhos" do elemento pacienteTr com a função appendChild();
	pacienteTr.appendChild(createTd("info-nome",paciente.nome));
	pacienteTr.appendChild(createTd("info-peso",paciente.peso));
	pacienteTr.appendChild(createTd("info-altura",paciente.altura));
	pacienteTr.appendChild(createTd("info-gordura",paciente.gordura));
	pacienteTr.appendChild(createTd("info-imc",calcularImc(paciente.peso,paciente.altura)));

	return pacienteTr;
}

//Função responsável por criar o elemento td e adicionar suas classes
function createTd(classe,conteudo){
	var tdCriada = document.createElement("td");
	tdCriada.classList.add(classe);
	tdCriada.textContent = conteudo;
	return tdCriada;
}

