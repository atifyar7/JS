const mySym= Symbol("key1")
const myObj={
    name: "Atif",
    "full name": "Muhammad Atif",
    [mySym]: "myKey1",
    age: 23,
    isLogedIn: false,
    subject: ["Big Data", "SQE", "Topics in SE"]
}

// console.log(myObj.name);
// console.log(myObj["full name"]);
// console.log(myObj[mySym]);

myObj.name= "Amir"
// Object.freeze(myObj)
myObj.name= "Usman"
// console.log(myObj);

myObj.greeting= function(){
    console.log(`Hello user: ${this.name}`)
}
// console.log(myObj.greeting())
// ===============================

const university= {
    uniName: "Air Uni",
    student:{
        studentName:{
            firstName: "Muhammad Atif",
            lastNAme: "Yar"
        }
    }
}

// console.log(university.student.studentName.firstName);

const combinedObj= Object.assign(myObj, university)
console.log(combinedObj);