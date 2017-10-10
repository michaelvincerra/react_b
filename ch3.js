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