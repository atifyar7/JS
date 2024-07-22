// +++++++++++++++++++ FOR OF LOOP ++++++++++++++++

const myArray= [1,2,3,4,5]
for (const value of myArray) {
    // console.log(value);
}

const Name= "Muhammad Atif Yar"
for (const i of Name) {
    // console.log(`Char of your name is ${i}`);
}

const map = new Map()
map.set("PK", "Pakistan")
map.set("SA", "Saudia Arabia")
map.set("UK", "United Kingdom")
map.set("PK", "Pakistan")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// ++++++++++++++++++ FOR IN LOOP +++++++++++++++

const myObj= {
    cpp: "C++",
    js: "JavaScript",
    py: "Python"
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}

// +++++++++++++++++++++ FOR EACH LOOP +++++++++++++++++

const languages=["java", "Js", "Cpp", "Python", "Ruby"]

// languages.forEach( function (values){
//     console.log(values);
// } )

// now for each loop using arrow function

languages.forEach( (item, index, array) => {
    // console.log(index, ": ", item, array)
})

const MyCoding= [
    {
        name: "javascript",
        filename: "js"
    },
    {
        name: "C plus plus",
        filename: "cpp"
    },
    {
        name: "Python",
        filename: "py"
    }
]

MyCoding.forEach( (item)=>{
    console.log(`language name is ${item.name} and filename is ${item.filename}`);
} )