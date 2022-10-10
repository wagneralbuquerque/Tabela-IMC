var pacientes = document.querySelectorAll(".paciente");


// Alterando dados conteúdo de uma classe
var titulo = document.querySelector(".titulo");
titulo.textContent = "Cálculo IMC";




function calculaImc(peso, altura) {
var imcValor = 0;
imcValor = peso / (altura * altura);
return imcValor.toFixed(2);
}

//Percorre todos os pacientes
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  //Coletando dados do Paciente
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var  tdImc = paciente.querySelector(".info-imc");
  tdImc.textContent = calculaImc(peso, altura);  


  
  var pesoValid = validaPeso(peso);
  var alturaValid = validaAltura(altura);


  if (!validaPeso) {
    console.log("Peso Inválido");
    pesoValid = false;
    paciente.querySelector(".info-peso").classList.add("campo-invalido"); //sinaliza com cores campos com informações inválidas
  }
  if (!validaAltura) {
    console.log("Altura Inválida");
    pesoValid = false;
    paciente.querySelector(".info-altura").classList.add("campo-invalido"); //sinaliza com cores campos com informações inválidas
  }

  if (pesoValid & alturaValid) {
    var imc = calculaImc(peso, altura); 
  
  }
} 

function validaPeso(peso){

  if (peso >0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}
function validaAltura(altura){

  if (altura >0 && altura < 3){
    return true;
  }else{
    return false;
  }
}