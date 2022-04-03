function recibirH() {
  var peso = document.getElementById("peso").value;
  var estatura = document.getElementById("estatura").value;
  var edad = parseFloat(document.getElementById("edad").value);
  var factor = parseFloat(document.getElementById("factor").value);
  var a = 9.99;
  var b = 6.25;
  var c = 4.92;
  var d = 5;
  var hombre = a * peso + b * estatura - c * edad + d;
  var factor = hombre * factor;
  var Total = factor * 7;
  document.getElementById("escribirH").innerHTML =
    "  Tus calorías consumidas dados los hábitos de actividad semanales son: " +
    Total +
    " kcal. por semana";
}

function recibirM() {
  var peso = document.getElementById("peso").value;
  var estatura = document.getElementById("estatura").value;
  var edad = parseFloat(document.getElementById("edad").value);
  var factor = parseFloat(document.getElementById("factor").value);
  var a = 9.99;
  var b = 6.25;
  var c = 4.92;
  var d = 161;
  var mujer = a * peso + b * estatura - c * edad - d;
  var factor = mujer * factor;
  var Total = factor * 7;
  document.getElementById("escribirM").innerHTML =
    "  Tus calorías consumidas dados los hábitos de actividad semanales son:" +
    Total +
    " kcal. por semana";
}

/*function manual(){
  <a href="https://youtu.be/gl8QIVgpnr0"></a>
}*/