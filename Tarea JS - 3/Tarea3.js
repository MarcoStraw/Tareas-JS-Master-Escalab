// Ejercicio 1

const filtrarOrdenes = () => {
    console.time('Filtro de Ordenes')

    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ingredients.find(ingr => ingr === 'palta' ) &&
        sandwichOrder.ingredients.find(ingr => ingr === 'lechuga'))

    console.timeEnd('Filtro de Ordenes')

    console.log(resultado)
}

//Ejercicio 2

const filterOrdersByType = ({ type = '', filter = ''}) => sandwichOrders.filter(sandwichOrder => sandwichOrder[type] === filter)


const orderId = (id) => {

    const resultado = sandwichOrders.filter(orderIds =>
        orderIds.id === id)

    return resultado

}


const desestructurarId = (objeto) => {
    const [
        {
        ordered: fechaorden,
        protein: proteina,
        bread: pan
        }
 
    ] = objeto;
    return `La orden fue realizada el ${fechaorden}, la orden llevó ${proteina} y ${pan}` ;
}

//Ejercicio 3

const pepenillo = (id) => {
      
    const resultado = sandwichOrders.filter(sandwichOrder =>
        sandwichOrder.id === id &&
        sandwichOrder.ingredients.includes('pepinillos'));
    
console.log(resultado.length == 0 ? "false" : "true")    
}

// Ejercicio 4

const fechaBusqueda = (fecha) =>{
    const resultado = sandwichOrders.filter(f =>
        f.ordered === fecha)

        console.log(resultado)

}

// Ejercicio 5

const notBurger = () =>{
    const resultado = sandwichOrders.filter(b =>
        b.ingredients.find(i => i === 'cebolla caramelizada' ) &&
        b.protein === 'not burger')

        console.log (resultado);
}



const desestructurarBurger = (objeto) => {
    const [
        {
        ordered: fechaorden}
    ] = objeto;
    return `La orden fue realizada el ${fechaorden}`
}


// Ejercicio 6 Dificil

const resultado = sandwichOrders.map(sandwichOrder => 
    sandwichOrder.bread)

const hard = resultado.reduce((c, p) => {
    c[p] = (c[p] || 0) + 1;
    return c;    
}, Object.create(null));









