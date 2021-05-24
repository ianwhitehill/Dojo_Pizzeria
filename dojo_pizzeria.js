function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzerlla", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "banana peppers"]);
var p4 = pizzaOven("thin", "ranch", ["swiss"], ["bacon", "chicken"]);
