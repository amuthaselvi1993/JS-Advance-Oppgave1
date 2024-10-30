/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//Task 1 - filtering products proce less than 200

//Filter method has the return value of a new array to store
//the filtered data based on the predicate
//and does not modifies the parent list

const lowPriceProducts = products.filter((e) => e.price < 200);
console.log("-----Output for 1st task-----");
console.log(lowPriceProducts); //printing the less price products
console.log("------------------------------");

//Task 2 - creating an array with product names:

//map method creates array with the same size
//as original array but with defined values inside
//the callback method

const productNames = products.map((e) => e.name);
console.log("-----Output for 2nd task-----");
console.log(productNames);
console.log("------------------------------");

//Task 3 - Chaining filter and map methods to process
//name of electronic category products

const electronicProductNames = products
  .filter((e) => e.category === "electronics")
  .map((e) => e.name);
console.log("-----Output for 3rd task-----");
console.log(electronicProductNames);
console.log("------------------------------");

//Task 4 : Using some method to check presence of any products
//with price greater than 1000

//Using some method returns true or false based on the
//presence/absence of data as per the predicate
const checkHighPrice = products.some((e) => e.price > 1000);
console.log("-----Output for 4th task-----");
console.log(checkHighPrice);
console.log("------------------------------");

//Task 5: Using reduce to calculate the total price of all products

//using reduce returns a single value based
//on the operation done on the array items

//declaring total as a parameter,
//and setting 0 as the initial values as per syntax in the end
const totalPrice = products.reduce((total, e) => (total += e.price), 0);
console.log("-----Output for 5th task-----");
console.log(totalPrice);
console.log("------------------------------");
