function sayMyName(){
    console.log("Hello Atif")
}

// sayMyName()

function addTwoNumbers(num1, num2){
    // num1= 3
    // num2= 4
    // console.log(num1+num2);
    // let result= num1 + num2;
    // console.log(result)
    let result = num1 + num2
    // console.log("Result: ", result);
    return result
}

let result =addTwoNumbers(5,9)
// console.log("Result: ", result);
// addTwoNumbers(5+4)

function greetingLoggedinUser(userName= "New User"){
    if(userName=== undefined){
        console.log("Please enter your name");
        return
    }
    else{
    let greeting=`${userName} wellcome back`
    console.log(greeting);
    // return greeting
    }
}

greetingLoggedinUser("Atif Yar")

// ++++++++++++++

function calculateCartPrice(...items){
    return items

}

// console.log(calculateCartPrice(200, 245, 764, "Atif"));

const user ={
    userName: "Atif Yar",
    rollNo: 212056
}

function handleObject(object){
    console.log(`Your new user is ${object.userName} and his roll no is ${object.rollNo}`);
}

// handleObject(user)

const myNewArray=[200, 4932, "Atif Yar"]

function returnThirdValue(third){
    return third[2]
}

console.log(returnThirdValue(myNewArray));