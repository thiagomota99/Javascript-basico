var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click",function(){
	console.log("Buscando pacientes...");

	//http://api-pacientes.herokuapp.com/pacientes
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
	xhr.send();
	xhr.addEventListener("load",function(){
		if(xhr.status == 200){
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);
			pacientes.forEach(function(paciente){
				addPacienteTabela(paciente);
			});
			document.querySelector("#erro-ajax").classList.add("invisivel");			
		}
		else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			document.querySelector("#erro-ajax").classList.remove("invisivel");			
		}
	});
});