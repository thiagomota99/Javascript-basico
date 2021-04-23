var campoFilter = document.querySelector("#filtrar-tabela");

campoFilter.addEventListener("input",function(){
	var pacientes = document.querySelectorAll(".paciente");
	pacientes.forEach(function(paciente){
		var nome = paciente.querySelector(".info-nome").textContent;
		var expressao = new RegExp(campoFilter.value,"i");
		if(campoFilter.value.length == 0){
			paciente.classList.remove("invisivel");
		}
		else if(expressao.test(nome)){
			paciente.classList.remove("invisivel");
		}
		else {
			paciente.classList.add("invisivel");
		}
	});
});