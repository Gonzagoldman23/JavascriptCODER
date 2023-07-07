let valorDolar = 140; 

function pesosADolar(cantidadDolares) {
    return Math.round(cantidadDolares / valorDolar); 
}

function dolarAPesos(cantidadPesos) {
    return Math.round(cantidadPesos * valorDolar);
}

class Operacion {
    constructor(divisa, cantidad, total) {
        this.divisa = divisa;
        this.cantidad = cantidad;
        this.total = total; 
    }
}

const operaciones = [];

for (let index = 0; index < 5; index++) {
    const entrada = prompt('Elija la cotizacion que quiere hacer \n 1. Pasar de peso a dolar \n 2. Pasar de dolar a peso');
    const cantidad = Number(prompt('Ingrese la cantidad de pesos/dolares'))
    if (entrada == 1) {
        pesosADolar(cantidad);
        operaciones.push(new Operacion('Pesos', cantidad, pesosADolar(cantidad)))
        alert('Usted tiene ' + (pesosADolar(cantidad)) + ' dolares');
    } if (entrada == 2) {
        dolarAPesos(cantidad);
        operaciones.push(new Operacion('Dolar', cantidad, dolarAPesos(cantidad)))
        alert('Usted tiene ' + (dolarAPesos(cantidad)) + ' pesos');
    } else {
        alert('Ingrese una opcion valida')
    }
}

console.log(operaciones);
console.log(operaciones.length);