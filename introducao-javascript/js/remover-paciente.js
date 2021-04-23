var eventoTabela = document.querySelector("table");
eventoTabela.addEventListener("dblclick",function(event){
	var alvoDoEvento = event.target;
	var paiDoAlvo = alvoDoEvento.parentNode;
	paiDoAlvo.classList.add("fadeOut");
	setTimeout(function(){
		paiDoAlvo.remove();
	},500);
})