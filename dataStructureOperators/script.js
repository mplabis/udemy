"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${3 + 3}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = 1200,
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const test of menu.entries()) {
  console.log(`${test[0] + 1}: ${test[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(restaurant.openingHours);
console.log(restaurant.order(0, 1));
// restaurant.orderPizza("mushrooms", "ahus", "sibuyas", "luya");

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(1, 2, 34, 5, 3);
// add(12, 1, 5, 2, 5);
// add(9, 1, 54, 6, 3);
// const ingredients = [
//   prompt("let's make pasta! ingredient 1?"),
//   prompt("let's make pasta! ingredient 2?"),
//   prompt("let's make pasta! ingredient 3?"),
// ];

// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'makko', foundedIn: 1991 };

// console.log(newRestaurant);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Poblacion Alubijid',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
// time: '22:30',
// address: 'Poblacion Alubijid',
// mainIndex: 2,
// starterIndex: 2,
// });

// const { name, openingHours, categories, mainMenu, starterMenu } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 123;
// let b = 214;
// const obj = { a: 23, b: 69, c: 40 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const [first, , second] = restaurant.categories;

// console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);

// console.log(starter, main);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [x, , [y, z]] = nested;
// console.log(x, y, z);
// const { mainMenu: mains, starterMenu: starterss } = restaurant;
// console.log(mains, starterss);

// const arr = [7, 8, 9];
// const goodArr = [1, 2, ...arr];
// console.log(goodArr);

// console.log(...goodArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// const menuss = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menuss);

// const string = 'makko';
// const letters = [...string, 'P.'];
// console.log(`${letters}`);

// console.log(3 || "makko");
// console.log(true || 0);
// console.log("" || "makko");
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "hello" || 23 || null);
// console.log(typeof null);

// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1);
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);

// console.log("---AND---");
// console.log("makko" && 23 && 24 && "wawawa");
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
// restaurant.orderPizza && restaurant.orderPizza("luya", "sibuyas", "ahus");

// console.log(typeof restaurant.orderPizza);
