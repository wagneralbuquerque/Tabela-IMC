var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  // Captura os valores inseridos no Form
  var form = document.querySelector("#form-adiciona");

  var paciente = dadosDoForm(form);
  console.log(paciente);
  

  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);


  console.log(erros);
  
  if (erros.length > 0) {
    exibeMensamgensDeErro(erros);
    return;
  }

  if (erros.length == 0){
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
  var mensagensDeErro =  document.querySelector("#mensagem-erro");
  mensagensDeErro.innerHTML = " ";
  }
  console.log(imc);
  erros.length = 0;
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

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;

}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  
  var erros = [];
  console.log(erros);
  if (paciente.gordura.length == 0) erros.push("% de gordura Inválida");
  if (paciente.nome.length == 0) erros.push("Insira um Nome");
  if (!validaPeso(paciente.peso)) erros.push("Peso Inválido");
  if(!validaAltura(paciente.altura)) erros.push("Altura Inválida");
  
  return erros;
}


function exibeMensamgensDeErro (erros){
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
  });
    
}