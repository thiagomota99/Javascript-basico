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
 var elementoPai = document.createElement("tr"); //Cria-se o elemento pai, no caso uma linha de uma tabela.
 var elementoFilho = document.createElement("td"); //Cria-se o elemento filho, no caso uma coluna de uma tabela.
 elementoPai.appendChild(elementoFilho); //Atribuímos o elemento filho ao elemento pai, no caso a linha possui uma coluna
```

18. Criando um objeto em javascript. Definimos um nome para objeto, depois seus atributos. No caso: nome, peso, altura e gordura
```js
var paciente = {
  nome: form.nome.value,
  peso: form.peso.value,
  altura: form.altura.value,
  gordura: form.gordura.value
}
```

19. A função "reset" quando atribuída a um elemento `<form>` limpa o valor de seus inputs
```js
var form = ducment.querySelector("form");
form.reset();
```

20. Criando arrays em javascript com tamanho dinânimo
   Ex: `var meuArray = [];`

21. A função "push" serve para adicionar uma nova posição ao array.
```js
  var meuArray = [];
  var texto = "Texto teste";
  meuArray.push(texto);
```

22. Para criar um foreach em java script é feito da seguinte forma
```js 
  var meuArray = [];
  meuArray.forEach(function(erro){
  var texto = erro;
});
```
Primeiro criamos um array qualquer.</br>
Depois utilizamos a função `forEach()` que espera uma função anônima para ser executada</br>
para cada item do array.</br>


23. Para limpar o html de um elemento podemos utilizar a propriedade innerHTML
```js
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  ul.appendChild(li);
  ul.innerHTML = "";
```

24. Para remover um elemento do html usando javascript utilizamos a função `remove()`. Ela irá remover o elemento selecionado</br>
    e seus descendentes.
```js
  var h1 = document.createElement("ul");
  h1.remove();
```

25. A palavra "this" tem como objetivo atrelar um evento de click, por exemplo a um objeto. Ela garante que o evento
   será acionado para aquele objeto que o invocou.

26. Um fato importante sobre eventos é que eles são parecidos com bolhas
```html
    <tbody id="tabela-pacientes">
            <tr class="paciente">
              <td class="info-nome">Paulo</td>
              <td class="info-peso">1100</td>
              <td class="info-altura">2.00</td>
              <td class="info-gordura">10</td>
              <td class="info-imc">0</td>
            </tr>

            <tr class="paciente">
              <td class="info-nome">João</td>
              <td class="info-peso">80</td>
              <td class="info-altura">1.72</td>
              <td class="info-gordura">40</td>
              <td class="info-imc">0</td>
            </tr>
    </tbody>
<script>
  var addEvento = document.querySelector("#tabela-pacientes");
  addEvento.addEventListener("click",function(){
    console.log("Fui clicado!");
  });
</script>
```
Quando executado esse trecho de código, clique em uma coluna da tabela. O mesmo irá acionar o evento de click da tag `<tbody>`</br>
Isso indica que o evento de click é realizado para todos os elementos filhos (diretos/indiretos). Funciona como uma bolha,</br>
que saem do fundo do copo e vão até a superfície(quem chamou o evento). Na superfície o evento é de fato executado depois</br>
de percorrer todos elementos descendentes.

27. O objeto event possui uma propriedade chamada "target" que captura o elemento que foi o alvo do evento.
```html
<tbody id="tabela-pacientes">
  <tr class="paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">1100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
  </tr>

  <tr class="paciente">
    <td class="info-nome">João</td>
    <td class="info-peso">80</td>
    <td class="info-altura">1.72</td>
    <td class="info-gordura">40</td>
    <td class="info-imc">0</td>
  </tr>
</tbody>
<script>
  var addEvento = document.querySelector("#tabela-pacientes");
  addEvento.addEventListener("dblclick",function(event){
    var alvoDoEvento = event.target;
    console.log(alvoDoEvento);
  });
</script>
```    

28. A propriedade "target" é também um objeto que possui a propriedade "parentNode". O mesmo irá pegar o elemento pai do elemento alvo(target)
```html
<tbody id="tabela-pacientes">
  <tr class="paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">1100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
  </tr>

  <tr class="paciente">
    <td class="info-nome">João</td>
    <td class="info-peso">80</td>
    <td class="info-altura">1.72</td>
    <td class="info-gordura">40</td>
    <td class="info-imc">0</td>
  </tr>
</tbody>
<script>
  var addEvento = document.querySelector("#tabela-pacientes");
  addEvento.addEventListener("dblclick",function(event){
    var alvoDoEvento = event.target;
    var paiDoAlvo = alvoDoEvento.parentNode;
    console.log(alvoDoEvento);
    console.log(paiDoAlvo);
  });
</script>
```

29. A função `setTimeout()` tem objetivo de delimitar um "tempo de espera" para que algo aconteça. Ela possui dois parâmetros.</br>
   O primeiroa é função que deseja executar após o tempo de espera</br>
   o segundo é o tempo que a função deverá esperar para ser executada. O número é definido na grandeza de milisegundos, onde 1000ms = 1s</br>
```js
setTimeout(function(){
  alert("Olá Mundo!");
},1000);
```

30. Um outro evento muito interessante é o "input" que caputura tudo que usuário inputa (digita) para dentro da aplicação. Ele pode ser capturado
através da tag `<input>` que possui um valor.
```js
var getValorCampo = document.querySelector("input");
getValorCampo.addEventListener("input",function(){
  var texto = "oi"
  if(texto == getValorCampo.value){
    alert("Olá");
  }
});
```

31. Para buscar textos ou trechos de um uma forma fácil de implementar é usando Expressõe Regulares, o javascript possui expressões relugares que podemos
   utlizar da seguinte forma:
```js
var getValorCampo = document.querySelector("input");
getValorCampo.addEventListener("input",function(){
  var vogais = "AEIOU";
  var expressao = new RegExp(getValorCampo.value,"i");
  if(expressao.test(vogais)){
    alert("É uma vogal");
  }
});
```
Para criar uma expressão regular cria-se um objeto do tipo RegExp que espera dois parâmetros</br>
  1 - O texto que deseja testar sobre um outro texto</br>
  2 - Definir flags, como a diferenciação de letras maiúsculas e mínuculas. O "i" indica "insensitive case". Ou seja não fará diferenciação.


32. Para realizar requisições com javascript utilizamos um objeto chamado `XMLHttpRequest()`. Ele é responsável por relizar requisições Http</br>
   de todos os tipos(GET,POST,DELETE,PUT) e trefegar vários tipos de dados (XML,HTML,JSON). Para instanciar um objeto dessa classe utlizamos</br>
   a seguinte sintaxe: `var xmlHttpRequest = new XMLHttpRequest();`


33. O método `open()` do objeto XMLHttpRequest tem objetivo de abrir a conexão que se deseja realizar. A mesma espera dois parâmetros</br>
   1 - O tipo da requisição = Verbos Http (GET,POST,DELETE,PUT)</br>
   2 - O endereço http para qual deseja fazer a requisicao www.xyz.com.br/compras
```js
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open("GET","www.xyz.com.br/compras");
```

34. O método `send()` do objeto XMLHttpRequest tem objetivo de enviar a requisição previamente configurada no método `open();`
```js      
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open("GET","www.xyz.com.br/compras");
xmlHttpRequest.send();
```

35. Para exibirmos os dados da requisição através do objeto XMLHttpRequest. Utilizamos o evento de "load" que ira nos retornar a response (respota)</br>
   da requisição realizada assim que terminar de carregar a requisição. Desta forma, podemos exibir os dados de resposta com a propreidade do</br>
   XMLHttpRequest chamada de "responseText".
```js
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open("GET","www.xyz.com.br/compras");
xmlHttpRequest.send();
xmlHttpRequest.addEventListener("load", function(){
  console.log(xhr.responseText);
});
```

36. É possível realizar a conversão de requisições que devolvem como respota um JSON em um objeto ou arrays de objetos javascript. Para isso, usamos</br>
   uma função nativa do javascript chamada de `JSON.parse()`, a mesma espera como parâmetro um JSON que será convertido em um objeto javascript para</br>
   conseguirmos manipula-lo.
```js
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open("GET","http://api-pacientes.herokuapp.com/pacientes");
xmlHttpRequest.send();
xmlHttpRequest.addEventListener("load", function(){
  var resposta = JSON.parse(xhr.responseText);
  alert(resposta.nome);
});
```

37. O objeto XMLHttpRequest possui a propriedade "status". Ele retorna códigos das requisições http (200,404,500...). O mesmo podem ser utilizados
   para identificar falha ou sucesso na resposta da requisição.
```js
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open("GET","http://api-pacientes.herokuapp.com/pacientes");
xmlHttpRequest.send();
xmlHttpRequest.addEventListener("load", function(){
  if(xmlHttpRequest.status == 200){// => 200 = OK.        
    alert("Uhul! Funcionou!");
  }
  else {
    alert("Opa, algo deu errado!");
  }
});   
```