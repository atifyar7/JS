// +++++++ Arrays +++++++

const myArr= ["Atif", "Amir", "Faisal", "Usman"]
// console.log(myArr[1]);

myArr.push("Qasim")
myArr.pop();
myArr.unshift("Ali")
myArr.shift()
// console.table((myArr));

const newArray= myArr.join()
// console.log(myArr)
// console.log(typeof newArray)

console.log("A", myArr);
const mna1 = myArr.slice(0,2)
console.log("Slice= ",mna1);
console.log("B", myArr);
const mna2= myArr.splice(0,2)
console.log("Splice= ", mna2)
console.log("C", myArr);