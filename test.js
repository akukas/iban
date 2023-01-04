import * as iban from "./index.js";

console.log(iban.validateIBAN("GB82 WEST 1234 5698 7654 FAKEIBAN")); // false
console.log(iban.validateIBAN("GB06REVO00997072837462")); // true
