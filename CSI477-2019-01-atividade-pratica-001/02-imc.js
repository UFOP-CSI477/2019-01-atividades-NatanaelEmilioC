function validar(campo, alerta, label) {

  var n = parseFloat(campo.value);

  if (campo.value.length == 0 || isNaN(n)) {

    // Erro
    document.getElementById(alerta).style.display = "block";

    document.getElementById(label).classList.add("text-danger");

    campo.classList.add("is-invalid");

    campo.value = "";
    campo.focus();
    return false;

  }

  // Tudo correto
  document.getElementById(alerta).style.display = "none";
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");

  document.getElementById(label).classList.remove("text-danger");

  return true;

}

function rotulo(campo, alerta, label) {

  if (campo.value > 0) {
    document.getElementById(alerta).style.display = "block";
    document.getElementById(label).classList.add("text-info");
    campo.focus();
    return true;
  }

}

function calcular() {

  document.getElementById("alerta3").style.display = "none";
  
  var v1 = document.dados.valor1;
  var v2 = document.dados.valor2;
  var res;
  
  if (validar(v1, "alerta1", "labelv1") && validar(v2, "alerta2", "labelv2")) {

    var n1 = parseFloat(v1.value);
    var n2 = parseFloat(v2.value);

    res = n1 / (n2 * n2);

    document.dados.resultado.value = res.toPrecision(3);

    if (res < 18.5) {
      rotulo(document.dados.resultado,"alerta3","labelv3");
    } else
    if (res < 24.9) {
      rotulo(document.dados.resultado,"alerta4","labelv3");
    } else
    if (res < 29.5) {
      rotulo(document.dados.resultado,"alerta5","labelv3");
    } else
    if (res < 34.9) {
      rotulo(document.dados.resultado,"alerta6","labelv3");
    } else
    if (res < 39.9) {
      rotulo(document.dados.resultado,"alerta7","labelv3");
    }
    else {
      rotulo(document.dados.resultado,"alerta8","labelv3");
    }
  }
}

function paraResetar(){
  window.location.reload(); 
}