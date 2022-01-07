function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
function showPizza(pizza){
    console.log("Corteza: " + pizza.tipoCorteza);
    console.log("Tipo de salsa:  " + pizza.tipoSalsa);
    console.log("Quesos:   " + pizza.quesos);
    console.log("Salsas: " + pizza.salsas+"\n");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomPizzaOven(){
    cortezas=["estilo Chicago", "lanzada a mano", "extra crocante", "delgada"];
    tipoSalsas=["tradicional", "marinara", "española"];
    quesos=["mozarrella", "cheddar", "parmesano", "feta"];
    salsas=["pepperoni", "salchicha", "champiñones", "aceitunas", "cebollas", "chorizo", "jamón"];

    var randomPizza=pizzaOven(cortezas[getRandomInt(4)], tipoSalsas[getRandomInt(3)], quesos[getRandomInt(4)], salsas[getRandomInt(7)]);
    return randomPizza;
}

var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var p2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var p3 = pizzaOven("extra crocante" , "tradicional" , ["mozzarella", "parmesano"], ["champiñones", "salchicha"]);
var p4 = pizzaOven("estilo Chicago" , "española" , ["cheddar"], ["champiñones", "aceitunas", "chorizo", "jamón"]);

showPizza(p1);
showPizza(p2);
showPizza(p3);
showPizza(p4);
showPizza(randomPizzaOven());