document.getElementById("botaoEnviar").addEventListener("click" , validaFormulario)

function validaFormulario() {
  if(document.getElementById("nome-usuaria").value != "" && 
    document.getElementById("email-usuaria").value != "" && 
    document.getElementById("telefone").value != ""){ 
      alert("Uhul, agora você irá receber nossos emails!!!")
  } else {
     alert("Por favor, preencha os dados corretamente.")
  }
}
