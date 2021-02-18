/* Ejecicio 1 */

var objeto1 = {
    mascotas : ['perros','gatos','canarios','pez','serpiente'],

   eliminarMascota: function(nombre)
    {
        primerElemento =this.mascotas.splice(this.mascotas.indexOf(nombre),1);
        return this.mascotas
    },
    eliminarUltimaMascota: function()
    {
        this.mascotas.pop();
        return this.mascotas
    }
    ,
    agregarMascota: function(nombre)
    {
        this.mascotas.push(nombre);
        return this.mascotas
    }
    ,
    contadorMascotas: function(){

        const palabras = this.mascotas;

         const terminanEn = palabras.filter(palabra => palabra.endsWith('os'));

          return "hay "+terminanEn.length+ " mascotas";

    }
}

/* Ejercicio 2 */

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME'
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
    
}

/* const {
    nombre,
    empresa: {
        datos:{
            nombre
        },
        cargo
    },
    gustos: [primerElemento, ...resto],
    hijos = "No tiene hijos"
} = trabajador; */


const trabajadorDesesconstructurado = (trabajador) => {
    const {
        nombre: nomTrabajador,
        empresa: {
            datos: {
                nombre: empresa
            }
        },
        cargo: cargoTrabajador,
        gustos: [gusto1, ...restoGustos],
        hijos: vacio
    } = trabajador;
    return `El trabajador ${nomTrabajador} trabaja en ${empresa} con cargo ${cargoTrabajador} y le gusta ${restoGustos} y ${gusto1}, ${vacio}`;
};

const trabajadorDesesconstructurado2 = (trabajador) => {
    const {
        nombre: nomTrabajador,
        empresa: {
            ubicacion: {
                comuna: comunaTrab,
                puesto: puestoTrab
            },
            clientes: [app1, app2]
        },
        cargo: cargoTrabajador,

    } = trabajador;
    return `El trabajador ${nomTrabajador} va a su trabajo en ${comunaTrab}, es ${cargoTrabajador}, en el puesto ${puestoTrab}, trabaja con ${app1} y ${app2}`;
}
