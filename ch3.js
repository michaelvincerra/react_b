// "Understanding basic concepts of functional programming will elevate your knowledge of structuring React applications."
// Functions can do the same things that variables can do.

// OLD
// var log = function(message) {
//     console.log(message)
// }
// log("In JavaScript functions ARE variables")

// NEW
// Write same function as above with an arrow function

const log = message => console.log(message)
console.log(`ES6 way to write function: ${log}`)

// using 'const' prevents it from being overwritten
const obj = {
    message: "They can be added to objects like variables", 
    log(message){
        console.log(message)
    }
}
// Note the use of dot notation on object
obj.log(obj.message)

// Add functions to Arrays
const messages = [
    'They can be inserted into arrays',
    message => console.log(message),
    "like variables",
    message => console.log(message)
]

messages[1](messages[0])
messages[3](messages[2])

// Functions can be sent to other functions as arguments

const insideFn = logger =>
log("They can be sent to other functions as arguments");

insideFn(message => console.log(message))

// They can be returned from other functions, like variables

let createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
}

// const scream is passing a function as an argument of createScream!
const scream = createScream(message => console.log(message))

scream('functions can be returned from other functions')
scream('createScream returns a function')
scream('scream invokes that returned function')

// Revised to use all arrows =>
// More than one => means it's a higher order functions

// const createScream = logger => message =>
//     logger(message.toUpperCase()+ "!!!")

// Declarative vs. Imperative
// OLD

var string = "This is the tonight show with Jimmy Fallon"
var urlFriendly = ""; 

for(var i=0; i<string.length; i++){
    if(string[i] === " "){
        urlFriendly += "-"; 
    } else {
        urlFriendly += string[i];
    }
}
console.log(urlFriendly);

// NEW

// const string1 = "This is the tonight show with Jimmy Fallon"
// const urlFriendly1 = string.replace(/ /g, "-")
// console.log(urlFriendly1)

// // DOM construction using OLD way, imperative

// var target = document.getElementById('target');
// var wrapper = document.createElement('div'); 
// var headline = document.createElement('h1'); 

// wrapper.id = "welcome"; 
// headline.innerText = "Hello World";

// wrapper.appendChild(headline); 
// target.appendChild(wrapper); 

// REACT method
// Declarative DOM construction using REACT component

// const { render } = ReactDOM

// const Welcome = () => (
//     <div id="welcome">
//         <h1>Hello World</h1>
//     </div>
// )
// render(
//     <Welcome />,
//     document.getElementById('target')
// )

//Key concepts of functional programming: 
// Immutability; purity; data transformation; higher-order functions; recursion

// Immutability

let color_lawn = {
    title: "lawn",
    color: "00FF00",
    rating: 0,
}

// Build a function to rate colors
// BAD WAY

// function rateColor(color, rating) {
//     color.rating = rating
//     return color
// }
// console.log(rateColor(color_lawn, 5).rating)
// console.log(color_lawn.rating)

// Revise the rateColor so as not to change original 'color' object
// BEST WAY

let rateColor = function(color,rating) {
    // Object.assign makes a copy
    // It takes a blank object and overwrites rating
    return Object.assign({}, color, {rating: rating})
}
console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)

// Now revise the above using => 

// const rateColor = (color, rating) =>
//     ({
//         ...color,
//         rating
//     })

let list = [
    {title: "Rad Red"},
    {title: "Lawn Green"},
    {title: "Party Pink"}
]
// Create a function that will add colors to array, using PUSH
// However, 'push' is a MUTABLE method

// let addColor = function(title, colors) {
//     colors.push({title: title})
//     return colors;
// }
// console.log(addColor("Glam Silver", list).length)
// console.log(list.length)

// Revise above formula using instead: Array.concat

const addColor = (title, array) =>array.concat({title})
console.log(addColor("Glam Silver", list).length)
console.log(list.length)

// Revise above formula using Emerging JavaScript:
// const addColor = (title, list) => [...list, {title}]

// PURE FUNCTIONS: Returns a value that is computed based on its arguments

// NOT A PURE FUNCTION

// let frederick = {
//     name: "Frederick Douglass",
//     canRead: false,
//     canWrite: false,
// }
// function selfEducate() {
//     frederick.canRead = true
//     frederick.canWrite = true
//     return frederick
// }
// selfEducate()
// console.log(frederick)

// REVISED AS A PURE FUNCTION
// This function is 'pure' because it computes the value based on the value that was sent to it: person.
// It returns a NEW person object WITHOUT muting the argument sent to it. 

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false,
}

const selfEducate = person =>
    // Note: () must appear because these always follow => notation
    ({
       ...person, 
       canRead: true,
       canWrite: true, 
    })
console.log(selfEducate(frederick))
console.log(frederick)

// IMPURE FUNCTION
// This mutates the DOM -- BAD!

function Header(text) {
    let h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.appendChild(h1);
}
Header("Header() caused side effects");

// PURE FUNCTION
// This does NOT mutate the DOM

// const Header = (props) => <h1>{props.title}</h1>
//In the HTML, you must add for it to run: <script type="text/jsx">

// DATA TRANSFORMATIONS

// ** MASTER these three core functions: Array.map(); Array.reduce(); Array.filer()

const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
]
console.log(schools.join(", "))

// Note: ... .filter(school => school[0]) === "W" is interpreted as:
// return value if school/iterator returns school[0] at first index position that stars with a "W"
// Array.filter() is IMMUTABLE: it produces a NEW array
// Syntax of .filter(...) is similar to LIST COMP in Python
// school here is called the 'predicate'; it always returns a Boolean value
const wSchools = schools.filter(school => school[0] === "W")
console.log(wSchools)

const cutSchool = (cut, list) => 
    list.filter(school => school !== cut)

console.log(cutSchool("Washington & Lee", schools).join(" * "))    
// \n = new line
console.log(schools.join("\n"))

// Array.map
// IMMUTABLE
// Array.map takes one function as its argument
// this function is invoked for every item in the array, and whatever it returns is added to the array

const highSchools = schools.map(school => `${school} High School`)
console.log(highSchools.join("\n"))
console.log(schools)

// Array.map can also produce an array of objects, values, arrays, other functions....
// Example that produces object for each school

const highSchools1 = schools.map(school => ({name: school}))

console.log(highSchools1)
console.log(highSchools1[2]) // Can also call  by index position

let schools1 = [
    {name: "Yorktwon"},
    {name: "Stratford"},
    {name: "Washington & Lee"},
    {name: "Wakefield"},
]
// NOTE: editName is undefined 
// let updatedSchools = editName("Stratford", "HB Woodlawn", schools1)

// console.log(updatedSchools[1])
// console.log(schools1[1])



const editName = (oldName, name, arr) =>
    arr.map(item => {
        if(item.name === oldName) {
            return {
                ...item,
                name
            }
        }else{
            return item
        }
    })

// editName function rewritten as ternary function

const editName1 = (oldName, name, arr) =>
    arr.map( item =>
        (item.name === oldName) ?
        ({...item, name}) :
        item
)
console.log(editName("Stratford", "WB Woodlawn", schools1))


// Combine: Array.map & Object.keys 
// Transform schools object into an array of schools

const schools2 = {
    "Yorktown": 10,
    "Washington & Lee": 2 ,
    "Wakefield": 5,
}

const schoolArray = Object.keys(schools2).map(key =>
    ({
      name: key, 
      wins: schools2[key]  
    })
)
console.log(schoolArray)
console.log(Object.keys(schools2))  // Keys are now string Keys, with values as numbers

// reduce, reduceRight -- used to transform an array into a VALUE, including number, string, value, object, function....

const ages = [21,18,42,40,64,63,34];

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
        return age
    } else {
        return max
    }
 }, 0
)

console.log('maxAge', maxAge)

// NOTES:
// ages array is reduced to a single value: max: 64. 
// reduce takes two arguments(callback function, original value)
// original value is set to '0' above
// Callback is invoked once for every item in the array
// Callback returns the GREATER of the  two numbers
 // 21 > 0
 // 18 > 21

 // Revise above formula as ternary:

 const max = ages.reduce(
     (max, value) => (value > max) ? value: max,
     0
 )
 console.log(`maxAge as ternary`, max)

const colors = [
    {   id: '-xekare',
        title: "rad red",
        rating: 3,
      }, 
      {
        id: '-jbwsof',
        title: "big blue",
        rating: 2,      },
       {
        id: '-prigbj',
        title: "grizzly gray",
        rating: 5,
       } ,
       {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1,
       }
    ]
const hashColors = colors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = {title, rating}
        return hash
    },
    {}
    // The second argument is an empty object, sent to reduce function: It is the initial value for the hash
)
console.log(hashColors)
    
// Transform arrays into completely different arrays with reduce

const colors1 = ["red", "red", "green", "blue", "green"];

const distinctColors = colors1.reduce(
    (distinct, color) =>
        (distinct.indexOf(color) !== -1) ?
        distinct:
        [...distinct, color],
        [] // This empty array is the initial value for 'distinct'
)
console.log(distinctColors)

// Add more examples of map() and reduce()!!!









