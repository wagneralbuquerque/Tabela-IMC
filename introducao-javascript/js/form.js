var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  // Captura os valores inseridos no Form
  var form = document.querySelector("#form-adiciona");
  
  var paciente = dadosDoForm(form);
  console.log(paciente)

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
  imcTd.textContent = calculaImc(peso, altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

 console.log(imc);
});

function dadosDoForm(form){

  paciente = {
    nome : form.nome.value,
    altura : form.altura.value,
    peso : form.peso.value,
    gordura : form.gordura.value,
    imc : calculaImc(form.peso.value, form.altura.value)

  }

    return paciente;

}