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

console.log("");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

console.log("");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

console.log("");

// 2.Uppercase Transformation:
console.log("Uppercase Transformation:");
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

console.log("");

// Name Lengths
console.log("Name Lengths:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

console.log("");

// Sorting
console.log("Sorting:");
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

console.log("");

// Filtering Cape
console.log("Filtering Cape:");
const capeFreeProvinces = [...provinces].filter(province => !province.toLowerCase().includes("cape")).length;
console.log(capeFreeProvinces);

console.log("");

// Finding 'S'
console.log("Finding 'S':");
const namesWithS = names.map(name => name.includes('S') || name.includes('s'));
console.log(namesWithS);

console.log("");

// 7. Creating Object Mapping
console.log("Creating Object Mapping:");
const nameProvinceMap = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceMap);

console.log("");

console.log("Advanced Exercises");
console.log("Log Products:", products.map((product) => product.product));

console.log("");

console.log("Filter by Name Length:", products.filter(product => product.product.length > 5));

console.log("");
console.log("Price Manipulation:", products.filter(product => product.price.trim() !== "").map(product => parseInt(product.price, 10)).reduce((sum, product) => sum + product));

console.log("");

console.log("Concatenate Product Names:", products.reduce((sum, product) => sum + product.product + ' ', ''));

console.log("");

console.log("Find Extremes in Prices:", products.filter(product=>product.price.toString().trim() !== "").map(product => parseInt(product.price, 10)).reduce((extremes, price)=>{
  const intPrice = parseInt(price, 10);
  const high = extremes.high !== undefined ? extremes.high : 0;
  const low = extremes.low!== undefined? extremes.low : 9_999_999;

  return {
    high: intPrice > high? intPrice : high,
    low: intPrice < low? intPrice : low,
  }
}));

console.log("");

console.log("Object Transformation:", products.reduce((obj, product) =>{
  obj[product.product] = Number(product.price);
  return obj;
}, {}));
