name = "Hetvi"
city = "ahmedabad"

console.log(`Hello my name is ${name} and i live in ${city}`);

const gameName = new String('hetvi-Shah')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,5)
console.log("NewString:",newString)

const sliceString = gameName.slice(-1, -5)
console.log("Slice:",sliceString)

