const priceInJPY = 5000;

// Tulis kode di bawah ini
const currency = new Map();

// set key value for currency object Map
currency.set("USD", 14000);
currency.set("JPY", 131);
currency.set("SGD", 11000);
currency.set("MYR", 3500);

let priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR)