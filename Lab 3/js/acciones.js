function calcularCambio() {
  var montoOrigen = parseFloat(document.getElementById('montoOrigen').value);
  var monedaOrigen = document.getElementById('monedaOrigen').value;
  var monedaDestino = document.getElementById('monedaDestino').value;

  if (isNaN(montoOrigen) || montoOrigen <= 0) {
    alert('Ingresa un monto válido.');
    return;
  }

  var tipoCambio = obtenerTipoCambio(monedaOrigen, monedaDestino);
  var totalARecibir = montoOrigen * tipoCambio;

  document.getElementById('resultado').innerHTML = 'Total a recibir: ' + totalARecibir.toFixed(2) + ' ' + monedaDestino;
}

function obtenerTipoCambio(monedaOrigen, monedaDestino) {
  if (monedaOrigen === 'dolar' && monedaDestino === 'soles') {
    return 3.8; 
  } else if (monedaOrigen === 'soles' && monedaDestino === 'dolar') {
    return 0.26;
  } else {
    return 1.0; 
  }
}
