function criptografar(){
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let mensagem = document.getElementById("mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let ilustracao = document.getElementById("ilustracao");

    let textocriptografado = texto
     .replace(/e/gi,"enter")
     .replace(/i/gi,"imes")
     .replace(/a/gi,"ai")
     .replace(/o/gi,"ober")
     .replace(/u/gi,"ufat");

     if (texto.length != 0){
        document.getElementById("mensagem").textContent = textocriptografado;
        document.getElementById("titulo-mensagem").textContent = "";
        paragrafo.textContent = "";
        ilustracao.style.visibility = 'hidden';
        ocultarilustracao();

     }
     else{
        ilustracao.style.visibility = "visible"
        ilustracao.src ="./assets/frogprocurandotxt 1.png";
        tituloMensagem.textContent = "Nenhuma mensagem encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        document.getElementById("mensagem").textContent = "";
        alert ("Digite algum texto");
     }
     function ocultarilustracao(){
        ilustracao.classList.add("ocultar")
    }               
}

    function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let mensagem = document.getElementById("mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let ilustracao = document.getElementById("ilustracao");

    let textocriptografado = texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if (texto.length != 0){
        document.getElementById("mensagem").textContent = textocriptografado;
        document.getElementById("titulo-mensagem").textContent = "";
        paragrafo.textContent = "";
        ilustracao.style.visibility = 'hidden';
        ocultarilustracao();
    } else{
        ilustracao.style.visibility = "visible"
        tituloMensagem.textContent = "Nenhuma mensagem encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        document.getElementById("mensagem").textContent = "";
        alert ("Digite algum texto");
       
    }
   
}

// const btnCopiar = document.querySelector("btn-copiar");
// btnCopiar.addEventListener("click", copiar = () => {
//     var conteudo = document.querySelector(".texto").textContent;
//     navigator.clipboard.writeTexy(conteudo);
//     console.log("oi");
// })

document.getElementById('execCopy').addEventListener('click', execCopy);
function execCopy() {
  document.querySelector("#mensagem").select();
  document.execCommand("copy");
}


