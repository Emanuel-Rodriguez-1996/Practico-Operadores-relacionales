window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnCalcular").addEventListener("click", ejercicio1);
  document.querySelector("#btnCalcular2").addEventListener("click", ejercicio2);
  document.querySelector("#btnCalcular3").addEventListener("click", ejercicio3);
  document.querySelector("#btnConvertir").addEventListener("click", ejercicio4);
  document.querySelector("#btnEvaluar").addEventListener("click", ejercicio5);
  document.querySelector("#btnMultiplo").addEventListener("click", ejercicio6);
  document.querySelector("#btnMostrar").addEventListener("click", ejercicio7);
  document.querySelector("#btnMostrar2").addEventListener("click", ejercicio8);
  document.querySelector("#btnSalir").addEventListener("click", ejercicio9);
  document.querySelector("#btnCalcular4").addEventListener("click", ejercicio10);
  document.querySelector("#btnCalcular5").addEventListener("click", ejercicio11);
  document.querySelector("#btnMostrar3").addEventListener("click", ejercicio12);
  document.querySelector("#btnCalcular6").addEventListener("click", ejercicio13);
  document.querySelector("#btnCalcular7").addEventListener("click", ejercicicio14);
  document.querySelector("#btnMostrar15").addEventListener("click", ejercicio15);
  document.querySelector("#btnCalcular8").addEventListener("click", ejercicio16);
  document.querySelector("#btnCalcular9").addEventListener("click", ejercicio17);
  document.querySelector("#btnCalcular10").addEventListener("click", ejercicio18);
  document.querySelector("#btnCalcular11").addEventListener("click", ejercicio19);
  document.querySelector("#btnCalcular12").addEventListener("click", ejercicio20);
  document.querySelector("#btnCalcular13").addEventListener("click", ejercicio21);
  document.querySelector("#btnCalcular14").addEventListener("click", ejercicio22);
  document.querySelector("#btnMostrar23").addEventListener("click", ejercicio23);
  document.querySelector("#btnMostrar24").addEventListener("click", ejercicio24);
  document.querySelector("#btnStock").addEventListener("click", ejercicio25);
  document.querySelector("#btnComprar").addEventListener("click", ejercicio25a);
  document.querySelector("#btnComprar").setAttribute("disabled", "disabled");
  document.querySelector("#txtNombre25").setAttribute("disabled", "disabled");
  document.querySelector("#txtCamaras").setAttribute("disabled", "disabled");
  document.querySelector("#btnMostrar26").addEventListener("click", ejercicio26);
  document.querySelector("#btnCalcular27").addEventListener("click", ejercicio27);
  document.querySelector("#btnCalcular27a").addEventListener("click", ejercicio27a);
  document.querySelector("#txtValor2").setAttribute("disabled", "disabled");
  document.querySelector("#btnCalcular27a").setAttribute("disabled", "disabled");
  document.querySelector("#btnCalcular28").addEventListener("click", ejercicio28);

}

function ejercicio1() {
  let numero = Number(document.querySelector("#txtNumero").value);
  if (numero >= 0) {
    numero = "Numero positivo";
  } else {
    numero = "Numero negativo";
  }
  document.querySelector("#pResultado").innerHTML = numero;
}

function ejercicio2() {
  let numero = Number(document.querySelector("#txtNumero2").value);
  if (numero > 10) {
    numero = "mayor que diez";
  } else {
    numero = "menor que diez";
  }
  document.querySelector("#pResultado2").innerHTML = numero;
}

function ejercicio3() {
  let numero = Number(document.querySelector("#txtNumero3").value);
  if (numero > 20) {
    numero = "es mayor que 20";
  } else {
    numero = "es menor que 20";
  }
  document.querySelector("#pResultado3").innerHTML = numero;
}

function ejercicio4() {
  let numero = Number(document.querySelector("#txtNumero4").value);
  if (numero < 0) {
    numero = numero * -1;
  } else {
    numero = "Numero positivo";
  }
  document.querySelector("#pResultado4").innerHTML = numero;
}

function ejercicio5() {
  let numero = Number(document.querySelector("#txtNumero5").value);
  if (numero > 10 && numero < 20) {
    numero = "El numero es mayor que 10 y menor que 20";
  } else {
    numero = "El numero no es mayor que 10 y menor que 20";
  }
  document.querySelector("#pResultado5").innerHTML = numero;
}

function ejercicio6() {
  let numero = Number(document.querySelector("#txtNumero6").value);
  if (numero % 3 === 0 && numero % 7 === 0) {
    numero = "El numero es multiplo de 3 y de 7";
  } else {
    numero = "El numero no es multiplo de 3 y de 7";
  }
  document.querySelector("#pResultado6").innerHTML = numero;
}
function ejercicio7() {
  let numero = Number(document.querySelector("#txtNumero7").value);
  if (numero < 20 || numero > 20) {
    numero = "CUMPLE";
  } else {
    numero = "No CUMPLE";
  }
  document.querySelector("#pResultado7").innerHTML = numero;
}
function ejercicio8() {
  let numero = Number(document.querySelector("#txtNumero8").value);
  if (numero > 30) {
    numero = "es mayor que treinta";
  } else if (numero < 10) {
    numero = "menor que 10";
  } else {
    numero = "Entre diez y treinta";
  }
  document.querySelector("#pResultado8").innerHTML = numero;
}

function ejercicio9() {
  let dias = document.querySelector("#slcDias").value;
  let temperatura = Number(document.querySelector("#txtTemp").value);
  let resultado;

  if (dias === "dom" && temperatura < 10) {
    resultado = "Quedarse en casa, hoy no trabaja, abrigarse mucho";
    if(dias ==="dom" && temperatura > 20){
      resultado = "Quedarse en casa, hoy no trabaja, Ropa comoda"
    }
  } else if (temperatura < 10 && dias !== "dom") {
    resultado = "Levantarse, Abrigarse mucho, Ir al trabajo";
  } else if (temperatura > 20 && dias !== "dom") {
    resultado = "Levantarse, Ponerse ropa cómoda, Ir al trabajo";
  } else {
    resultado = "Levantarse, Abrigo moderado, Ir al trabajo";
  }
  document.querySelector("#pResultado9").innerHTML = resultado;
}

function ejercicio10() {
  let numero = document.querySelector("#txtNumero10").value;
  let numero2 = document.querySelector("#txtNumeroEj10").value;
  let resultado;
  if (numero > numero2) {
    resultado = numero2 - numero;
  } else {
    resultado = numero - numero2;
  }
  document.querySelector("#pResultado10").innerHTML = resultado;
}
function ejercicio11() {
  let numero = Number(document.querySelector("#txtNumero11").value);
  let numero2 = Number(document.querySelector("#txtNumeroEj11").value);
  let cuenta = document.querySelector("#slcOperaciones").value;
  let resultado;
  if (cuenta === "S") {
    resultado = numero + numero2;
  } else if (cuenta === "R") {
    resultado = numero - numero2;
  } else if (cuenta === "M") {
    resultado = numero * numero2;
  } else {
    resultado = numero / numero2;
  }
  document.querySelector("#pResultado11").innerHTML = resultado;
}
function ejercicio12() {
  let caracter = document.querySelector("#txtCaracter").value;
  let resultado;
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    (caracter === "o" && caracter === "u")
  ) {
    resultado = "Es vocal";
  } else {
    resultado = "No es vocal";
  }
  document.querySelector("#pResultado12").innerHTML = resultado;
}
function ejercicio13() {
  let numero = Number(document.querySelector("#txtNumero13").value);
  let numero2 = Number(document.querySelector("#txtNumeroEj13").value);
  let resultado;
  if (numero % numero2 === 0) {
    resultado = "Son multiplos";
  } else {
    resultado = "No son multiplos";
  }
  document.querySelector("#pResultado13").innerHTML = resultado;
}

function ejercicicio14() {
  let millas = Number(document.querySelector("#txtNumero14").value);
  let plus = document.querySelector("#slcPs").value;
  let resultado;
  if ((millas >= 30000) & (plus === "S")) {
    resultado = "Europa destino mas lejano";
  } else if ((millas >= 15000) & (plus === "S")) {
    resultado = "America del norte destino mas lejano";
  } else if ((millas >= 2500) & (plus === "S")) {
    resultado = "America del sur destino mas lejano";
  } else if ((millas >= 60000) & (plus === "N")) {
    resultado = "Europa destino mas lejano";
  } else if ((millas >= 30000) & (plus === "N")) {
    resultado = "America del norte destino mas lejano";
  } else if ((millas >= 5000) & (plus === "N")) {
    resultado = "America del sur destino mas lejano";
  } else {
    resultado = "No tiene millas suficientes";
  }
  document.querySelector("#pResultado14").innerHTML = resultado;
}

function ejercicio15() {
  let departamentos = document.querySelector("#txtDepartamento").value;
  let resultado;
  switch (departamentos) {
    case "A":
      resultado = "Canelones";
      break;
    case "B":
      resultado = "Maldonado";
      break;
    case "C":
      resultado = "Rocha";
      break;
    case "D":
      resultado = "Treinta y Tres";
      break;
    case "E":
      resultado = "Cerro Largo";
      break;
    case "F":
      resultado = "Rivera";
      break;
    case "G":
      resultado = "Artigas";
      break;
    case "H":
      resultado = "Salto";
      break;
    case "I":
      resultado = "Paysandú";
      break;
    case "J":
      resultado = "Rio Negro";
      break;
    case "K":
      resultado = "Soriano";
      break;
    case "L":
      resultado = "Colonia";
      break;
    case "M":
      resultado = "San José";
      break;
    case "N":
      resultado = "Flores";
      break;
    case "O":
      resultado = "Florida";
      break;
    case "P":
      resultado = "Lavalleja";
      break;
    case "Q":
      resultado = "Durazno";
      break;
    case "R":
      resultado = "Tacuarembó";
      break;
    case "S":
      resultado = "Montevideo";
      break;
  }
  document.querySelector("#pResultado15").innerHTML = resultado;
}

let valor1 = 10;
let valor2 = 5;
let valor3 = 8;
function ejercicio16() {
  let valor1 = Number(document.querySelector("#txtNumero16").value);
  let valor2 = Number(document.querySelector("#txtNumeroEj16").value);
  let valor3 = Number(document.querySelector("#txtNumeroEjs16").value);
  if (valor1 > valor2 && valor1 > valor3) {
    document.querySelector("#pResultado16").innerHTML =
      "a es el mayor valor de los 3";
  }
}

function ejercicio17() {
  let valor1 = Number(document.querySelector("#txtNumero17").value);
  if (valor1 < 0 || valor1 > 10) {
    document.querySelector("#pResultado17").innerHTML = "a está fuera de rango";
  }
}

let total = 0;
let cantidadNumeros = 0;
function ejercicio18() {
  let numero = Number(document.querySelector("#txtNumero18").value);
  cantidadNumeros++;
  if (numero >= 0) {
    total += numero;
  }
  if (cantidadNumeros >= 6) {
    document.querySelector("#pResultado18").innerHTML = total;
  }
}

let multiplos5 = 0;
let mayoresA20 = 0;
let ambos = 0;
let contNumeros = 0;
function ejercicio19() {
  let numero = Number(document.querySelector("#txtNumero19").value);
  contNumeros++;

  if (numero % 5 === 0 && numero > 20) {
    ambos++;
    multiplos5++;
    mayoresA20++;
  } else if (numero % 5 === 0) {
    multiplos5++;
  } else if (numero > 20) {
    mayoresA20++;
  }
  if (contNumeros >= 5) {
    document.querySelector(
      "#pResultado19"
    ).innerHTML = `Multiplos de 5: ${multiplos5}<br>
                                                        Mayores que 20: ${mayoresA20}<br>
                                                        Ambas condiciones: ${ambos}`;
  }
}
function ejercicio20() {
  let azucar = Number(document.querySelector("#txtAzucar").value);
  let harina = Number(document.querySelector("#txtHarina").value);
  let aceite = Number(document.querySelector("#txtAceite").value);
  let agua = Number(document.querySelector("#txtAgua").value);
  let recetas = 0;
  if (azucar >= 1 && harina >= 100 && aceite >= 1 && agua >= 1) {
    // Obtener el número máximo de recetas de acuerdo al ingrediente que está en menor cantidad
    if (azucar <= harina / 100 && azucar <= aceite && azucar <= agua) {
      recetas = azucar;
    } else if (harina / 100 <= azucar && harina / 100 <= aceite && harina / 100 <= agua) {
      recetas = harina / 100 | 0;
    } else if (aceite <= azucar && aceite <= harina / 100 && aceite <= agua) {
      recetas = aceite;
    } else if (agua <= azucar && agua <= harina / 100 && agua <= aceite) {
      recetas = agua;
    }
  }
  if (recetas > 0) {
    document.querySelector(
      "#pResultado20"
    ).innerHTML = `Con los ingredientes disponibles se pueden elaborar: ${recetas} recetas de galletas.`;
  } else {
    document.querySelector("#pResultado20").innerHTML =
      "No se pueden elaborar recetas de galletas con los ingredientes disponibles.";
  }
}

function ejercicio21() {
  let pago = 0;
  let pagosParciales = 0;
  let casa = Number(document.querySelector("#txtCasa").value);
  let ingresos = Number(document.querySelector("#txtIngresos").value);
  if (ingresos < 20000) {
    pago = casa * 0.15;
    pagosParciales = (casa - pago) / (7 * 12);
  } else {
    pago = casa * 0.3;
    pagosParciales = (casa - pago) / 12;
  }
  document.querySelector(
    "#pResultado21"
  ).innerHTML = `Primer pago: $${pago}<br> Pagos parciales: $${pagosParciales}`;
}
let descuento = 4;
function ejercicio22() {
  let medio;
  let montoFinal;
  let montoIngresado = Number(document.querySelector("#txtMonto").value);
  let tarjeta = document.querySelector("#slcTarjeta").value;

  if (tarjeta === "si") {
    medio = "tarjeta";
  } else {
    medio = "efectivo";
  }

  if (montoIngresado < 10000 && tarjeta === "si") {
    montoFinal = montoIngresado * ((100 - descuento) / 100);
  } else {
    montoFinal = montoIngresado;
  }
  document.querySelector(
    "#pResultado22"
  ).innerHTML = `El monto original es: ${montoIngresado}<br>
                                                    el pago se hizo con ${medio}<br>
                                                    el monto final es: ${montoFinal}`;
}
let reprobados = 0;
let aprobados = 0;
let buenaNota = 0;
let notaMinima = Number.POSITIVE_INFINITY;
let notaMaxima = 0;
function ejercicio23() {
  let notas = Number(document.querySelector("#txtNotas").value);
  if (notaMaxima < notas) {
    notaMaxima = notas;
  }
  if (notaMinima > notas) {
    notaMinima = notas;
  }
  if (notas < 70) {
    reprobados++;
  } else {
    aprobados++;
  }
  if (notas >= 90) {
    buenaNota++;
  }
  document.querySelector(
    "#pResultado23"
  ).innerHTML = `Estudiantes reprobados ${reprobados}<br>
Estudiantes aprobados ${aprobados}<br>
Estudiantes con buena nota ${buenaNota}<br>
Nota minima ${notaMinima}<br>
Nota maxima ${notaMaxima}`;
}

let totalSueldos = 0;
let empleados = 0;
let sueldoMinimo = Number.POSITIVE_INFINITY;
function ejercicio24() {
  let sueldos = Number(document.querySelector("#txtSueldos").value);
  totalSueldos += sueldos;
  empleados++;
  if (sueldoMinimo > sueldos) {
    sueldoMinimo = sueldos;
  }
  document.querySelector(
    "#pResultado24"
  ).innerHTML = `Total de sueldos a pagar ${totalSueldos}<br>
                                                    Cantidad de empleados ${empleados}<br>
                                                    Sueldo minimo es ${sueldoMinimo}`;
}

let stockRestante;
function ejercicio25() {
  let stock = Number(document.querySelector("#txtStock").value);
  stockRestante = stock;
  document.querySelector("#btnComprar").removeAttribute("disabled");
  document.querySelector("#txtNombre25").removeAttribute("disabled");
  document.querySelector("#txtCamaras").removeAttribute("disabled");
  document.querySelector("#txtStock").setAttribute("disabled", "disabled");
  document.querySelector("#btnStock").setAttribute("disabled", "disabled");
}
let cantidadCompras = 0;
let maxCompras = 0;
let nombreCliente;
let pedidosTotal = 0;
function ejercicio25a() {
  let nombre = document.querySelector("#txtNombre25").value;
  let compras = Number(document.querySelector("#txtCamaras").value);
  if (compras <= stockRestante) {
    cantidadCompras++;
    stockRestante -= compras;
    if (compras > maxCompras) {
      maxCompras = compras;
    }
    document.querySelector(
      "#pResultado25"
    ).innerHTML = `Total de compras ${cantidadCompras}<br>
                                                                Stock restante ${stockRestante}<br>
                                                                Nombre del cliente que compró más cantidad de cámaras: ${nombre} compro ${maxCompras} camaras`;
    if (stockRestante === 0) {
      document
        .querySelector("#btnComprar")
        .setAttribute("disabled", "disabled");
      document
        .querySelector("#txtNombre25")
        .setAttribute("disabled", "disabled");
      document
        .querySelector("#txtCamaras")
        .setAttribute("disabled", "disabled");
      document.querySelector("#txtStock").removeAttribute("disabled");
      document.querySelector("#btnStock").removeAttribute("disabled");
    }
  } else {
    document.querySelector("#pResultado25").innerHTML =
      "No hay suficiente stock";
  }
}

let nochesRegalo = 0;
let montoTotal = 0;
function ejercicio26() {
  let cantidadNoches = Number(document.querySelector("#txtNoches").value);
  let medioPago = document.querySelector("#slcTarjetaCredito").value;

  if (cantidadNoches >= 3 && cantidadNoches < 7) {
    nochesRegalo = 1;
  } else if (cantidadNoches >= 7) {
    nochesRegalo = 2;
    if (medioPago === "t") {
      nochesRegalo++;
    }
  }

  montoTotal = cantidadNoches * 40;

  document.querySelector(
    "#pResultado26"
  ).innerHTML = `Noches de regalo: ${nochesRegalo}<br>
    Cantidad de noches a alojarse: ${cantidadNoches + nochesRegalo}<br>
    Costo total: ${montoTotal}`;
}

let cantidadIntentos;
function ejercicio27(){
    let valor1 = Number(document.querySelector("#txtValor1").value);
    cantidadIntentos = valor1
    document.querySelector("#txtValor2").removeAttribute("disabled");
    document.querySelector("#btnCalcular27a").removeAttribute("disabled");
    document.querySelector("#txtValor1").setAttribute("disabled", "disabled");
    document.querySelector("#btnCalcular27").setAttribute("disabled", "disabled");
}

function ejercicio27a(){
    let valor1 = Number(document.querySelector("#txtValor1").value);
    let ingreso = Number(document.querySelector("#txtValor2").value);

    if(ingreso === valor1){
    document.querySelector("#txtValor1").removeAttribute("disabled");
    document.querySelector("#btnCalcular27").removeAttribute("disabled");
}
document.querySelector("#pResultado27").innerHTML = `Felicidades adivinaste el numero`
}
let puntajeEquipo1 = 0;
let puntajeEquipo2 = 0;
function ejercicio28() {
  let puntaje1 = Number(document.querySelector("#txtEquipo1").value);
  let puntaje2 = Number(document.querySelector("#txtEquipo2").value);

  puntajeEquipo1 += puntaje1;
  puntajeEquipo2 += puntaje2;

  document.querySelector("#pResultado28").innerHTML = `Puntaje del equipo 1: ${puntajeEquipo1}<br>
                                                        Puntaje del equipo 2: ${puntajeEquipo2}`;

  if (puntajeEquipo1 >= 30 || puntajeEquipo2 >= 30) {
    document.querySelector("#txtEquipo1").setAttribute("disabled", "disabled");
    document.querySelector("#txtEquipo2").setAttribute("disabled", "disabled");
    document
      .querySelector("#btnCalcular28")
      .setAttribute("disabled", "disabled");
  }
}
