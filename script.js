function pizzaOven(crustType,sauceType,cheeses,toppings) {
    return {
    crustType: crustType,
    cheeses: cheeses,
    sauceType: sauceType,
    toppings : toppings,
};
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarela"], ["pepperoni", "sausage"]);
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2)

var pizza3 = pizzaOven("hand tossed", "traditional", ["mozzarella", "feta"],["peperoni","sausage"]);
console.log(pizza3);

var pizza4 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["mushrooms", "olives", "onions"]);
console.log(pizza4);