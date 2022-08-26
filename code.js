const Visible = () => {
  var x = document.getElementById("Cuadro");
  x.style.display = "none";
  var y = document.getElementById("Resultado");
  y.style.display = "grid";
}

const Input = () => {
  const inputText = document.getElementById("Input").value;
  Encriptar(inputText);
  Visible();
} 

const Encriptar = (inputText) => {
  var enc = inputText.replace(/e/g, 'enter');
  enc = enc.replace(/i/g, 'imes');
  enc = enc.replace(/a/g, 'ai');
  enc = enc.replace(/o/g, 'ober');
  enc = enc.replace(/u/g, 'ufat');
  document.getElementById("Mensaje").innerHTML = enc;
}

const mensajeEncriptado = (inputText) => {
  var encriptar = inputText.replace(/enter/g, 'e');
  encriptar = encriptar.replace(/imes/g, 'i');
  encriptar = encriptar.replace(/ai/g, 'a');
  encriptar = encriptar.replace(/ober/g, 'o');
  encriptar = encriptar.replace(/ufat/g, 'u');
  document.getElementById("Mensaje").innerHTML = encriptar;
}

const Desencriptar = () => {
  const inputText = document.getElementById("Input").value;
  mensajeEncriptado(inputText);
  Visible() 
}

const Copiar = () => {
  var y = document.getElementById("Mensaje").innerHTML;
  navigator.clipboard.writeText(y);
}