/*  
1. Clean the coffee_data.js file.

All prices should be numbers.
All items should be strings.
Objects and properties should have commas separating them.
Connect the coffee_data.js file to the index.js file.

2. Print an array of all the drinks on the menu.

3. Print an array of drinks that cost 5 and under.

4. Print an array of drinks that are priced at an even number.

5. Print the total if you were to order one of every drink.

6. Print an array with all the drinks that are seasonal.

7. Print all the seasonal drinks with the words "with imported beans" after the item name. 
    For example: "affogato with imported beans".

*/

const coffeeMenu = require("./coffee_menu_data");

console.log(coffeeMenu)
// 2. Print an array of all the drinks on the menu.

console.log("Print an array of all the drinks on the menu")

const drinkName = (object) => object.name
console.log(coffeeMenu.map(drinkName))
console.log("--------------------------------------------")

// 3. Print an array of drinks that cost 5 and under.

console.log("Print an array of drinks that cost 5 and under.")
const drinkUnder5 = (object) => object.price <= 5
const drinksUnder5 = coffeeMenu.filter(drinkUnder5).map(drinkName)

console.log(drinksUnder5)

console.log("--------------------------------------------")

//4. Print an array of drinks that are priced at an even number.

console.log("Print an array of drinks that are priced at an even number.")
const evenPrice = (object) => {
    if (object.price % 2 === 0){
        return object.price
    }
}
evenPricedDrink = coffeeMenu.filter(evenPrice).map(drinkName)

console.log(evenPricedDrink)

console.log("--------------------------------------------")

// 5. Print the total if you were to order one of every drink.

console.log("Print the total if you were to order one of every drink.")

const totalSumPrice = (total, object) => total + object.price

const totalPrice = coffeeMenu.reduce(totalSumPrice,0)

console.log(totalPrice)

console.log("--------------------------------------------")
// 6. Print an array with all the drinks that are seasonal.

console.log("Print an array with all the drinks that are seasonal.")

const seasonalDrink = (object) => {
    if (object.seasonal){
        return object.seasonal
    }
}

const seasonalDrinks = coffeeMenu.filter(seasonalDrink).map(drinkName)

console.log(seasonalDrinks)

console.log("--------------------------------------------")

/* 7. Print all the seasonal drinks with the words "with imported beans" after the item name.
For example: "affogato with imported beans". */

console.log('Print all the seasonal drinks with the words "with imported beans" after the item name:')

const withBeans = (object) => {
    return console.log(`${object.name} with imported beans`)
}

coffeeMenu.forEach(withBeans)
