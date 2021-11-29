let pizzaToppings = ['peppers', 'sausage', 'ham', 'peperoni'];
function greetCustomer() {
    let toppingsArray = []
    for (const topping of pizzaToppings) {
            toppingsArray.push(` ${topping}`)
    }

console.log(`Welcome to Pizza House, our toppings are: ${toppingsArray}` );
};
// let Crusts = prompt("What crust would you like?");
// alert(crust);

// let Sizes = prompt("What size would you like?");
// alert(size);
// let Topping = prompt("What toppings would you like?");
// alert(pizzaToppings);

function getPizzaOrder(size,crust,...toppings){
    let pizzaOrder = [size,crust,...toppings];
    console.log(`One ${size} ${crust} pizza with ${toppings}, coming up`);
    return (pizzaOrder);
}


function preparePizza(pizzaOrder){
    console.log("Cooking Pizza");
    let pizza = {
        size: pizzaOrder[0],
        crust: pizzaOrder[1],
        toppings: pizzaOrder[2],
    }
    return pizza;
}

function servePizza(pizza) {
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust}, pizza with ${pizza.toppings}`)
    return pizza;
}

servePizza(preparePizza(getPizzaOrder("Large", "Thin crust", ["peperoni", "sausage", "cheese"])))
