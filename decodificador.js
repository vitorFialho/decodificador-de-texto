let textoResultado;
let botaoCriptografar = document.getElementById("criptografar");
let botaoDescriptografa = document.getElementById("descriptografar");
let botaoCopia = document.getElementById("copiar");
let botaoLimpa = document.getElementById("limpar");

function criptografa(){
    let textoDigitado = document.getElementById("texto-digitado").value;
    textoResultado = textoDigitado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("resultado").innerHTML = textoResultado;
}

function descriptografa(){
    let textoDigitado = document.getElementById("texto-digitado").value;
    textoResultado = textoDigitado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("resultado").innerHTML = textoResultado;
}

function copiaTexto(){
    let texto = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(texto);
    botaoCopia.textContent = "Copiado";
    setTimeout(() => {
        botaoCopia.textContent = "Copiar"
    }, 2000);
    document.getElementById("resultado").textContent = "";
    document.getElementById("texto-digitado").value = "";
}

botaoCriptografar.onclick = criptografa;
botaoDescriptografa.onclick = descriptografa;
botaoCopia.onclick = copiaTexto;










