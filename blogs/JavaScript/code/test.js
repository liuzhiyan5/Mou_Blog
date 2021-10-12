console.log(0.1 * 1.9); // 0.19;
console.log(-10 + 11); // 1
console.log(20 - 10); // 10
console.log(5 / 10); // 0.5
console.log(49 / 7); // 7
console.log(8 | 1);
console.log((8).toString(2));
console.log(0.1 + 0.2);
console.log(isNaN(NaN));

console.log(isNaN("刘德华")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN({ name: "罗老师" })); // true

let obj = { name: "123" };
console.log(obj.valueOf());

console.log("the Math object" + Math); //the Math object[object Math]
console.log("the JSON object" + JSON); //the JSON object[object JSON]

console.log(Math.toString());
console.log(JSON.toString());
console.log("-----------------");
