var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  // Captura os valores inseridos no Form
  var form = document.querySelector("#form-adiciona");

  var paciente = dadosDoForm(form);
  console.log(paciente);

  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  console.log(imc);
});

function dadosDoForm(form) {
  paciente = {
    nome: form.nome.value,
    altura: form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}



function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var nomeTd = montaTd(paciente.nome, "info-nome");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
