"use strict";
function validateKeys(obj, keys) {
    return keys.every((key) => key in obj);
}
// Sample Input and Output
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"])); // Output: true
// Use type assertion to bypass compile-time error
console.log(validateKeys(person, ["name", "address"])); // Output: false
