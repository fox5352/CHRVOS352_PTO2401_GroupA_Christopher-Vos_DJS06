// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. ForEach Basics
console.log('ForEach Basics:');
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

console.log("");

// 2.Uppercase Transformation:
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log("Uppercase Transformation:", uppercaseProvinces);

console.log("");

// Name Lengths
const nameLengths = names.map(name => name.length);
console.log("Name Lengths:",nameLengths);

console.log("");

// Sorting
const sortedProvinces = [...provinces].sort();// creates a copy of the provinces since the sort mutates the data
console.log("Sorting:", sortedProvinces);

console.log("");

// Filtering Cape
const capeFreeProvinces = [...provinces].filter(province => !province.includes("Cape")).length;
console.log("Filtering Cape:", capeFreeProvinces);

console.log("");

// Finding 'S'
const namesWithS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));
console.log("Finding 'S':", namesWithS);

console.log("");

// 7. Creating Object Mapping
const nameProvinceMap = names.reduce((obj, name, index) => {// gets the object, name, and index of array
  obj[name] = provinces[index];// assigns name=province(index) eg {Ashwin: Western Cape}
  return obj;// returns the object
}, {});// Initial empty object to store the mappings
console.log("Creating Object Mapping:", nameProvinceMap);

console.log("");

console.log("Advanced Exercises");

console.log("Log Products:", products.map(product => product.product));


console.log("");

console.log("Filter by Name Length:", products.filter(product => product.product.length <= 5));

console.log("");
console.log("Price Manipulation:", products.filter(product=>product.price.toString().trim() !== "").map(product => parseFloat(product.price, 10)).reduce((sum, product) => sum + product));

console.log("");

console.log("Concatenate Product Names:", products.reduce((sum, product) => sum + product.product + ' ', ''));

console.log("");

console.log("Find Extremes in Prices:", products.filter(product=>product.price.toString().trim() !== "").map(product => parseFloat(product.price, 10)).reduce((extremes, price)=>{
  const high = extremes.high// gets the highest from extremes
  const low = extremes.low// gets the lowest from extremes

  return {
    high: price > high ? price : high, // Find the highest price between extremes(high) and current price
    low: price < low ? price : low // Find the lowest price between extremes(low) and current price
  };
},
{ high: 0, low: Infinity}// initial values for the high and low 
));

console.log("");
// 6. Object Transformation
console.log('Transformed Products:', products.reduce((arr, product)=>{
  const [[_productKey, productValue], [_priceKey, priceValue]] = Object.entries(product);// uses Object.entries to destructure product 
  arr.push({name: productValue, cost: priceValue});
  return arr;
}, []));