//Marco Miranda//

//Ejercicio 1 //

function numParImpar(numero){

    if(numero === undefined){
        return "Ingrese un numero valido"
    }

    if(numero % 2 == 0){
       var cadena = String(numero);
       return "el numero: " + cadena + " es par";
    } else {
        var cadena = String(numero);
        return "el numero: " + cadena + " es impar";
    }
}

// Ejercicio 2 //

var cadena = "abcdefghijklmnñopqrstuvwxyz";

function buscarPosicion(caracter){
    caracterDevuelto = cadena.indexOf(caracter);
    if(caracterDevuelto === -1){
        return "Caracter Invalido"
    }
    else{
    return caracterDevuelto;
    }
}

// Ejercicio 3 //

function obtenerPrecioConImpuesto(precio){

    if(isNaN(precio) === true){

        return "ingreso un caracter o letra"
    }
 
    iva =  precio * 0.19;
    precio = precio + iva;
    return "El Precio con impuesto es de $" + precio;
}


// Ejercicio 4 //

function nuevoDado(nombre){

    return function(){
        var resultado = Math.floor(Math.random()*6)+1;
        return nombre + " tiró un dado y salió " + resultado;
    }
}


// Ejercicio 5 //

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function(){
    var nombrecompleto = this.nombre + this.apellido;
    localStorage.setItem(nombrecompleto, nombrecompleto);
    localStorage.setItem(this.edad, this.edad);
}

Persona.prototype.guardarEnSessionStorage = function(){
    var nombrecompleto = this.nombre + this.apellido;
    sessionStorage.setItem(nombrecompleto, nombrecompleto);
    sessionStorage.setItem(this.edad, this.edad);
}

//var marco = new Persona("Marco", "Miranda", 26);