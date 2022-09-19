var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();


  // Captura os valores inseridos no Form 
  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var altura = form.altura.value;
  var peso = form.peso.value;
  var gordura = form.gordura.value;



  var pacienteTr = document.createElement("tr");

  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var nomeTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
 
  
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  nomeTd.textContent = nome;
  gorduraTd.textContent = gordura;
  imcTd.textContent = imc;
   
  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)
 
 
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);


  console.log(pacienteTr);
  console.log(nome);
  console.log(peso);
  console.log(altura);
  console.log(gordura);
});