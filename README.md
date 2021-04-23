# Curso de Javascript
 Esse projeto tem o intuito de explicar conceitos e funções básicas do javasscript<br>
 Estarei colocando aqui várias anotações relacionadas a linguagem e suas funções<br>
 explicando com exemplos práticos.

## Repositório é composto de:
1. Arquivos html (index e atividadeDeFixacao)
2. Diretório com os scripts javascripts
3. Diretório com a folha de estilo da página html
4. Ícone da página html

***

# Anotações
1. `document.querySelector()` tem como objetivo selecionar algum elemento</br>
do meu document (página html) para manipula-lo.<br>

2. Criando uma variável em JavaScript
  `var titulo = documento.querySelector("h1");`</br>
-Desta forma estou pegando o elemento `<h1>` do meu documento e colocando</br>
na variável "titulo"</br>

3. Pegando o "conteúdo de texto" do elemento</br>
    `document.querySelector("h1").textContent;`</br>
    
4. Pegando o "contéudo de texto" do elemento e alterando seu valor</br>
    ```js
     var titulo = document.querySelector("h1");
     titulo.textContent = "Banana";
     ```
     </br> 
     
5. A função querySelector consegue buscar seletores como:<br>
		- Classes<br>
		- Tags<br>
		- Seletores CSS<br>
	Obs: A função consegue buscar apenas um elemento por vez (o primeiro que encontrar).
		 Em caso de um array de elementos utilizar `querySelectorAll()`<br>

6. A função `querySelector()` também serve para buscar tags e seletores aninhados</br>
		Ex:
  ```html
    <tr class="paciente" id="primeiro-paciente">
      <td class="info-nome">Paulo</td>
      <td class="info-peso">100</td>
      <td class="info-altura">2.00</td>
      <td class="info-gordura">10</td>
      <td class="info-imc">0</td>
    </tr>
 ```
No exemplo eu desejo pegar o elemento td com a classe "info-peso"</br>
Desta forma o javascript ficaria da seguinte forma</br>
```js
 var paciente = document.querySelector("#primeiro-paciente");
 var tdPeso = document.querySelector(".info-peso");
```
</br>

7. Operadores Lógicos</br>
		|| = Representa o "ou"</br>
		&& = Representa o "e"</br>

8. Operadores Condicionais</br>
	    ==  Representa o "igual á"</br>
	    !=  Representa o "diferente de"</br>
	    >   Representa o "maior que"</br>
	    < 	Representa o "menor que"</br>
	    <=	Representa o "menor ou igual á"</br>
	    >=	Representa o "maior ou igual á"</br>

9. Operadores Aritméticos</br>
		+	Representa a soma</br>
		-	Representa a multiplicação</br>
		/	Representa a divisao</br>
		%	Representa o resto da divisão</br></br>
  
10. Estrutura de Repetição For</br>
	A estrutura de repetição "for" é extremamente poderosa na criação de loops</br>
	Ex:
  ```js
   //Laço de repetição que tem início em zero e vai até a quantidade do array de elementos pacientes
   for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]; //Atribui o paciente atual á variável paciente;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if ((peso > 0 && peso < 1000) && (altura > 0 && altura < 3.00)){
     var imc = peso/(altura * altura);
     tdImc.textContent = imc;
     console.log(imc);
    }
    else {
     tdImc.textContent = "Altura ou peso inválido!";
     console.log("IMC Inválido!");
    }
   }
  ```
11. Função "toFixed" delimita o número de casas decimais após a vírgula.
	 	Ex: `var num = 10.00002 => num.toFixed(2) ==> 10.00`</br>

12. Propriedade "style" serve para modificar o estilo (css) dos elementos via javascript
```js
paciente.style.color = "red";
paciente.style.backgroundColor = "red";
```
Obs: Sempre opte por utilizar classes de css para definir estilos na página.</br>
	 	  Portanto utilize a propriedade "classList" que retornará todas as classes do objeto</br>
	 	  e possui o método `add("nome-da-classe")` onde poderá adicionar novas classes ao objeto desejado.</br></br>
     

13. A função `addEventListener()` captura (escuta) eventos realizados pelo usuário na página html. Desta forma podemos</br>
	 disparar alguma ação quando determinado evento acontecer. A função possui dois parâmetros primordiais para seu</br>
	 funcionamento addEventListener("nome-evento",funcao-a-ser-executada)</br>
	 	- Parâmetro 1 = Evento que vai disparar o listener Ex: `click`, `blur`, `dbllick`, `load`</br>
	 	- Parâmetro 2 = Função executada a ser executada após o evento</br>
```js
addEventListener("click",mostraMensagem);
function mostraMensagem(){
 alert("Oba, fui clicado!");
}

addEventListener("click",function(){
 alert("Oba, fui clicado!");
});

```
Obs: Uma das vantagens de se utilizar a função anônima é que a mesma só vai existir quando o evento acontecer</br>
	 			esta forma evita de alocar espaço em memória para a criação daquela função toda vez que carregar a página.</br></br>	 			 

14. Por padrão ao clicar em um botão (<button>) dentro de um formulário (<form>) a página será recarregada. O que não pode</br>
ser o desejado. Para resovermos esse comportamento é usado a função `preventDefault()`. Ou seja, previna o evento padrão. Desta</br>
forma o comportamento padrão não será mais executado.</br> 
 ```js
addEventListener("click",function(event){
 event.preventDefault();
 alert("Oba, fui clicado!");
});
 ```
Obs: o "event" é uma variável global do javascript que contempla várias funções para o uso de eventos.</br></br>

15. Ao selecionar um `<form>` com a função querySelector podemos acessar o seus respectivos `<input>`'s com o valor</br>
de seus atributos "name".
```html
<form id="form-adiciona">
 <div class="grupo">
  <label for="nome">Nome:</label>
  <input id="nome" name="nome" type="text" placeholder="digite o nome do seu paciente" class="campo">
 </div>
</form>
```
   
```js
<script>
 var form = document.querySelector("#form-adiciona");
 alert(form.nome);
</script>
```

16. Criando elementos html com Javascript com a função `createElement()`.</br>
		Ex: `var criandoBotao = document.createElement("button");`</br></br>

17. Aninhando elementos html com Javascript com a função `appendChild()`. Desta forma podemos criar elementos filhos de outros elementos.</br>
		Ex:
```js
 var elementoPai = document.createElement("tr"); Cria-se o elemento pai, no caso uma linha de uma tabela.
 var elementoFilho = document.createElement("td"); Cria-se o elemento filho, no caso uma coluna de uma tabela.
 elementoPai.appendChild(elementoFilho); Atribuímos o elemento filho ao elemento pai, no caso a linha possui uma coluna
```
