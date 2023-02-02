function cifrar (text){
    var cifrado = "";
    for(var i = 0; i < text.length; i++){
        if( text[i] == "a" ){
            cifrado = cifrado + "ai";
        } else  if( text[i] == "e" ){
            cifrado = cifrado + "enter";
        } else  if( text[i] == "i" ){
            cifrado = cifrado + "imes";
        } else  if( text[i] == "o" ){
            cifrado = cifrado + "ober";
        } else  if( text[i] == "u" ){
            cifrado = cifrado + "ufat";
        } else { 
            cifrado = cifrado + text[i];
        }
            
    }  
    return cifrado;

}  

function encriptar(){
    var texto = document.getElementById("texto").value;
    document.getElementById("newText").value = cifrar(texto);
    document.getElementById("blanco").style.display = "none";
    document.getElementById("texto").value = "";
    document.getElementById("texto").focus();
    document.getElementById("copy").style.display = "block";
    document.getElementById("newText").style.backgroundImage = "none";
}

function descifrar (text){
    var descifrado = "";
    for(var i = 0; i < text.length; i++){
        if(text[i] == "a" && text[i + 1] == "i"){
            descifrado = descifrado + "a";
            i = i + 1;
        }

        else if(text[i] == "e" && text[i + 1] == "n" && text[i + 2] == "t" && text[i + 3] == "e" && text[i + 4] == "r"){
            descifrado = descifrado + "e";
            i = i + 4;
        }

        else if(text[i] == "i" && text[i + 1] == "m" && text[i + 2] == "e" && text[i + 3] == "s" ){
            descifrado = descifrado + "i";
            i = i + 3;
        }

        else  if(text[i] == "o" && text[i + 1] == "b" && text[i + 2] == "e" && text[i + 3] == "r"){
            descifrado = descifrado + "o";
            i = i + 3;
        }

        else  if(text[i] == "u" && text[i + 1] == "f" && text[i + 2] == "a" && text[i + 3] == "t"){
            descifrado = descifrado + "u";
            i = i + 3;   
        } 
        
        else { 
            descifrado = descifrado + text[i];
        }            
    }
    return descifrado;
}

function desencriptar(){
    var texto = document.getElementById("texto").value;
    document.getElementById("newText").value = descifrar(texto);
    document.getElementById("blanco").style.display = "none";
    document.getElementById("texto").value = "";
    document.getElementById("texto").focus();
    document.getElementById("copy").style.display = "block";
    document.getElementById("newText").style.backgroundImage = "none";
}


function copiar() {
    alert("Texto copiado");
    document.getElementById("newText").select();
    document.execCommand("copy");
    document.getElementById("texto").focus();
    document.getElementById("newText").value = "";
}

document.getElementById("texto").focus();
document.getElementById("texto").value = "";
document.getElementById("newText").value = "";

var boton1 = document.getElementById("encriptado");
var boton2 = document.getElementById("desencriptado");
var boton3 = document.getElementById("copy");

boton1.addEventListener("click",encriptar);
boton2.addEventListener("click",desencriptar);
boton3.addEventListener("click",copiar);