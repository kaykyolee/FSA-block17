const coffeeMenu=require("./coffee_data.js");

//1. Clean the coffee_data.js file.
coffeeMenu.forEach((item)=>{
    item.price=parseFloat(item.price);
})

//2. Print an array of all the drinks on the menu.

const printName=(item)=>{
    return item.name;
}
const drinks=coffeeMenu.map(printName)
// console.table(drinks)

//3. Print an array of drinks that cost 5 and under.

const drinks5=(item)=>{
    return item.price<=5;
}

drinksUnder5=coffeeMenu.filter(drinks5)
// console.table(drinksUnder5)

//4. Print an array of drinks that are priced at an even number.

const drinksEven=(item)=>{
    return item.price%2===0;
}

drinksEvenNumbered=coffeeMenu.filter(drinksEven)
// console.table(drinksEvenNumbered)

//5. Print the total if you were to order one of every drink.

const printPrice=(item)=>{
    return item.price
}
const drinksPrice=coffeeMenu.map(printPrice)

const initialValue=0
const sumDrinks=drinksPrice.reduce(
    (accumulator,currentValue)=>accumulator+currentValue,initialValue
)
// console.log(sumDrinks)

//6. Print an array with all the drinks that are seasonal.

const seasonal=(item)=>{
    return item.seasonal===true
}
const drinksSeasonal=coffeeMenu.filter(seasonal)
// console.table(drinksSeasonal)

//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const NameOfSeasonal=(item)=>{
    return item.name+" with imported beans"
}
const drinksSeasonalName=drinksSeasonal.map(NameOfSeasonal)

// console.log(drinksSeasonalName)

