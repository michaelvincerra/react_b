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