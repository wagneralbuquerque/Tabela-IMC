var botaoBusca = document.querySelector("#buscar-pacientes");


botaoBusca.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    var erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
        erroAjax.classList.add("hide");
        var resposta = xhr.responseText;        
        var pacientes = JSON.parse(resposta);        
        pacientes.forEach(function (paciente) {

            adicionaPaciente(paciente);
            
        });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        
        erroAjax.classList.remove("hide");
        
    }

    });
    xhr.send();
    

});