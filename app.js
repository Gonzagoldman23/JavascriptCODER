const convertirCantidad = document.querySelector('#convertir');

function convertir() {
    const cantidad = Number(document.querySelector('#cantidad').value);
    document.getElementById('resultado').innerHTML = cantidad;
    const primeraMoneda = document.querySelector('#primera-moneda').value;
    const segundaMoneda = document.querySelector('#segunda-moneda').value;
    const valorDolar = 143;
    resultado = 0;

    if (primeraMoneda=='ARS' && segundaMoneda=='USD') {
        resultado = cantidad / valorDolar;
    } else if (primeraMoneda=='USD' && segundaMoneda=='ARS') {
        resultado = cantidad * valorDolar
    } else {
        resultado = cantidad;
    }

    document.getElementById('resultado').innerHTML = `Resultado: $${resultado}`;

    const transJSON = JSON.stringify(resultado);
    localStorage.setItem('resultado', transJSON);

}

convertirCantidad.addEventListener('click', convertir);

