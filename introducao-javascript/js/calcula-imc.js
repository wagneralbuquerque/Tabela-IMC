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
  var pesoValid = true;
  var alturaValid = true;


  if (peso > 600 || peso <= 0) {
    console.log("Peso Inválido");
    pesoValid = false;
    paciente.querySelector(".info-peso").classList.add("campo-invalido"); //sinaliza com cores campos com informações inválidas
  }
  if (altura > 3.0 || altura <= 0) {
    console.log("Altura Inválida");
    pesoValid = false;
    paciente.querySelector(".info-altura").classList.add("campo-invalido"); //sinaliza com cores campos com informações inválidas
  }

  if (pesoValid & alturaValid) {
    var imc = calculaImc(peso, altura); 
    
    //inserindo imc na tabela
    
     // to fixed para limitar a quantidade de números após a vírgula
  }
} 
