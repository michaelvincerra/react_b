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

const string1 = "This is the tonight show with Jimmy Fallon"
const urlFriendly1 = string.replace(/ /g, "-")
console.log(urlFriendly1)

// DOM construction using OLD way, imperative

var target = document.getElementById('target');
var wrapper = document.createElement('div'); 
var headline = document.createElement('h1'); 

wrapper.id = "welcome"; 
headline.innerText = "Hello World";

wrapper.appendChild(headline); 
target.appendChild(wrapper); 

// REACT method
// DOM construction using REACT component

const { render } = ReactDOM

const Welcome = () => (
    <div id="welcome">
        <h1>Hello World</h1>
    </div>
)
render(
    <Welcome />,
    document.getElementById('target')
)