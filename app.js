const textoIngresado = document.querySelector("#txtingreso");
//console.log(typeof textoIngresado);
//console.log(typeof textoIngresado.value);
const letras = [
    ["e", "enter"], //indice 0
    ["i","imes"], //indice 1
    ["a","ai"], //indice 2
    ["o","ober"], //indice 3 
    ["u","ufat"], //indice 4
];
const claves = [
    ["ufat","u"], //indice 0
    ["ober","o"], //indice 1
    ["ai","a"], //indice 2
    ["imes","i"], //indice 3 
    ["enter","e"], //indice 4
];
const imgDefault = "img/mishi-quest.png";
const imgExito = "img/mishi-happy.png";

function mostrarTexto(identidad, texto){
    let identidadHTML = document.querySelector(identidad);
    identidadHTML.innerHTML = texto;
    return;
}
function mostrarImagen(identidad, imagen){
    let identidadHTML = document.querySelector(identidad);
    identidadHTML.src = imagen;
    return;
}

// Encriptación
function encriptar(textoEncriptado){
    for(let i = 0; i < letras.length; i++){
        if (textoEncriptado.includes(letras[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(
                letras[i][0],
                letras[i][1]
            )
        }
    }
    //console.log(textoEncriptado);
    mostrarImagen("#imgegreso", imgExito);
    mostrarTexto("#h2egreso", "Texto encriptado:");
    mostrarTexto("#txtegreso", textoEncriptado);
    return;
}

function btnEncriptar(){
    let texto = textoIngresado.value;
    if (!/^[a-z]+(\s[a-z]+)*$/.test(texto)){
        alert("El texto ingresado sólo debe contener letras minúsculas, revise su texto e intente denuevo.");
        return;
    }
    else{
        texto = encriptar(textoIngresado.value);
    }
    //console.log(texto);
    return;
}

// Desencriptación
function desencriptar(textoDesencriptado){
    for(let i = 0; i < claves.length; i++){
        if (textoDesencriptado.includes(claves[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                claves[i][0],
                claves[i][1]
            )
        }
    }
    //console.log(textoDesencriptado);
    mostrarImagen("#imgegreso", imgExito);
    mostrarTexto("#h2egreso", "Texto desencriptado:");
    mostrarTexto("#txtegreso", textoDesencriptado);
    return;
}

function btnDesencriptar(){
    let texto = textoIngresado.value;
    if (!/^[a-z]+(\s[a-z]+)*$/.test(texto)){
        alert("El texto ingresado sólo debe contener letras minúsculas, revise su texto e intente denuevo.");
        return;
    }
    else{
        texto = desencriptar(textoIngresado.value);
    }
    //console.log(texto);
    return;
}

// Copiar texto resultante
function btnCopiar(){
    const textoCopiado = document.querySelector("#txtegreso").textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert("¡El texto ha sido copiado!");
    textoIngresado.value = "";
    mostrarImagen("#imgegreso", imgDefault);
    mostrarTexto("#h2egreso", "Ningún mensaje ha sido encontrado");
    mostrarTexto("#txtegreso", "Ingrese su texto");
    return;
}
