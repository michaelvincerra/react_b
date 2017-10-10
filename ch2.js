// ch2 emerging javascript
// Yes, you too. :)

// const variable cannot be changed 

// const pizza = true
// pizza = false
// Uncaught TypeError


// lexical variable scoping
// If a variable is created inside of an if/else block, that variable is not scoped to the block:
// ES5 JavaScript
// var topic = "JavaScript"
// if(topic){
//     var topic = "React"
//     console.log('block scope', topic)
// }
// console.log('global scope', topic)

// ES6 JavaScript
// Using let protects the value of the global variable:
// var topic = "JavaScript"

// if(topic){
//     let topic = "React"
//     console.log('block scope: ', topic)
// }

// console.log('global scope: ', topic)
// document.write(topic)


/// Using VAR in for loop
// var div,
//     container = document.getElementById('container')

// for (var i=0; i<5; i++) {
//     // declaring i in for loop creates a global variable named i..., then it iterates until 5
//     // when you click on ".onclick" the boxes, the global variable always reads "5" 
//     // because it's the globally declared variable as a result of using "var"
//     div = document.createElement('div')
//     console.log(div)
//     div.onclick = function() {
//         alert('This is box #' + i)
//     }
//     container.appendChild(div)
// }


/// Using LET in for loop ES6
var div,
container = document.getElementById('container')

for (let i=0; i<5; i++) {
// Declaring i in for loop  wit LET blocks off the scope of i.
// when you click on ".onclick" the boxes, LET variable shows the value for i [INDEX] as scoped within loop iteration 

    div = document.createElement('div')
    console.log(div)
    div.onclick = function() {
        alert('This is box #' + i)
}
container.appendChild(div)
}

// // Template literal uses ticks and variables as: `...${word}`
// let lastName = "Lugosi"
// let firstName = "Bela"
// console.log(`Bauhaus sang: ${firstName} ${lastName} is dead.`)

 
// FIND the ERROR in the following template literal
//     let qty = 2
//     const price = parseInt(20.00)
//     const event = "Bauhaus Concert"
//     const ticketAgent = "Count Dracula"

//     `
//     Hello ${firstName}, 

//     Thanks for ordering ${qty} tickets to the ${event}. 

//     Order details:
//     ${firstName}${lastName}
//     ${qty} * $${price} = $${qty*price} to ${event}

//     You can pick up your tickets at will call 30 minutes before the show.

//     Thanks,
//     ${ticketAgent}    
//     `

// console.log()


// const article = {title: "The Life an Times of a Blogger", body: "One day I was bored so I invented the blog, short for Weblog." } 

// document.body.innerHTML = 
// `
// <section>
//     <header> 
//         <h1> The HTML5 Blog </h1>
//     </header>
//         <article> 
//             <h2> ${article.title}</h2>
//             ${article.body}
//         </article>
//         <footer>
//             <p>copyright ${new Date().getYear()} | The HTML5 Blog </p>
//         <footer>
// </section>
// `

// function logActivity(name="", activity=""){
//     console.log(`${name} loves ${favActivity}`)

// function logActivity(p=defaultPerson) {

//     let defaultPerson = {
//         name: {
//             first: "Shazam",
//             last: "Wazah!"
//         }, 
//         favActivity: "Magic shows"
//         }
//         console.log(`${p.name.first} loves ${favActivity}`)        
//     }
// console.log(logActivity())

// Arrow functions
// traditional function

// var lordify = function(firstname) {
//     return `${firstName} of Cantebury`
// }

// console.log(lordify("Bubs"))
// console.log(lordify("Bimba"))

// // Using the arrow function => {return value}
// var lordify = firstname => `${firstname} of Cantebury`
// console.log(lordify("Sempliciotto"))

// // New use of Arrow function
// var lordify = (firstName, land) => `${firstName} of ${land}`
// console.log(lordify("Bugs", "Balookaville"))
// console.log(lordify("Pepe Le Piu'", "Parigi"))

// New use of Arrow function
var _lordify = (firstName, land) => {
    if (!firstName) {
        throw new Error('A first name is required to lordify!')
    }
    if (!land) {
        throw new Error('Every lord must have a land!')
    }
    return `${firstName} of ${land}`
}
console.log(_lordify("Dracula", "Transylvania"))
// console.log(_lordify("MonAmi", ))

// Arrow functions do not block off scope of "this"

// var tahoe = {
//     resorts: ["Kirkwood", "Squaw", "Alpine"],
//     print: function(delay=1000) {

//         setTimeout(() => {
//             // this will evaluate to false
//             console.log(this === window)
//             console.log(this.resorts.join(", ")) 
//         }, delay)
//     }
// }, 
// tahoe.print();

// Destructuring: Allows you to locally scope fields in an object and declare which values are used. 

var sandwich = {
    bread: "Schiacciatella",
    meat: "Salame",
    cheese: "Pecorino",
    toppings: ["lettuga", "pomodori", "senape"]
}

// destructing in action
var {bread, meat} = sandwich
console.log(bread, meat)

// destructure incoming function arguments
var lordify = regularPerson => {
    console.log(`${regularPerson.firstname} of Canterbury`)
}

var regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
}
lordify(regularPerson)

// Object literal enhancement: Opposite of Destructuring
// Grab variables from the Global scope and put them back together as an object.

// var name = "Larch Mountain"
// var elevation = 4062
// var funHike = {name, elevation}
// console.log(funHike)


// NOTE: We use 'this' to access the OBJECT keys.
// However, 'this' is NOT necessary to access the keys....
// name and elevation are now keys of the funHike object.

var name = "Hood"
var elevation = 11250
var print = function() {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall.`)
}
var funHike = {name, elevation, print}
funHike.print() 


// No longer necessary to use 'function' word. 

// OLD 
// var skier = {
//     name: name,
//     sound: sound,
//     powderYell: function() {
//         var yell = this.sound.toUpperCase()
//         console.log(`${yell}${yell}${yell}!!!`)
//     },
//     speed: function(mph) {
//         this.speed = mph
//         console.log('speed:', mph)
//     }
// }

// NEW  ! ERROR
// Uncaught ReferenceError: sound is not defined....
// const skier = {
//     name,
//     sound,
//     powderYell() {
//         let yell = this.sound.toUpperCase()
//         console.log(`${yell}${yell}${yell}!!!`)
//     },
//     speed (mph) {
//         this.speed = mph
//         console.log('speed:', mph)
//     }

// }

// Spread Operator: Combine two arrays into one array

var peaks = ["Mt. Hood", "Middle Sister", "Broken Top"]
var canyons = ["Owyhee Canyonlands", "Macks Canyon", "Crooked River Gorge"] 
var peaksAndCanyons = [...peaks,...canyons]

console.log(peaksAndCanyons.join(', '))

// reverse function mutates the array!

var [last] = peaks.reverse()
console.log(last)
console.log(peaks.join(', '))

//  However, with a spread operator, you don't have to mutate the array.
//  Spread operator creates a copy of the array and then reverses it.
var peaks1 = ["Mt. Hood", "Middle Sister", "Broken Top"]
var [last1] = [...peaks1].reverse()
// console.log(last1)
console.log(peaks1.join(', '))

// Spread operator can be used to get the 'rest' of items in array.
var lakes = ["Frog", "Timothy", "Crater"]
// first and rest are arbitrary variable names
var [first,...rest] = lakes
console.log(rest.join(", "))


// Using spread operator to collect function arguments as an array.
// directions function takes in the argument using the spread operator.
// First argument is assigned to the start variable. The last argument
// is assigned to finish variable using Array.reverse()...
// Then use the length of the arguments array to display how many towns passed
// The number of stops is the length of arguments minus the the finish stop

function directions(...args) {
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse()
    console.log(`Drive through ${args.length} towns`)
    console.log(`Start in ${start}`)
    console.log(`The destination is ${finish}`)
    console.log(`Stopping ${stops.length} times in between`)
}

directions(
    "Portland",
    "Salem",
    "Eugene",
    "Ashland",
    "Redwood City",
    "San Francisco"
)

// Spread operator used for objects to combine two object!

var morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
}
var dinner = "mac and cheese"

var backpackingMeals = {
    // take all arguments in morning..., and dinner too!
    ...morning, 
    dinner
}

console.log(backpackingMeals)


// Promises
// Create an asynchronous promise
// Thesis: When you call a promise-based asynch function, it returns a Promise instance (see below)

// getFakeMembers creates a promise
const getFakeMembers = count => new Promise((resolves, rejects) =>{
    const api = 'https://api.randomuser.me/?nat=US&results=${count}'
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = ()  =>
        (request.status === 200) ? 
        resolves(JSON.parse(request.response).results):
        reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
})

//  Now we need to call the promise.
// 'then' function is used to chain to do something after promise fulfilled. 

getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("cannot load members from randomuse.me")
    )//Attaches to accept/reject for resolution of promise
)

// Classes in ES6
class Vacation {
    constructor(destination, length){
        this.destination = destination
        this.length = length
    }
    print() {
        console.log(`${this.destination} will take ${this.length} days.`)
    }
}

// Now create an instance of the class. 

// const trip = new Vacation("Catania, Sicilia", 11); 
// console.log(trip.print()); 

// Classes can be "extended", and these extensions inherit all props from superclass.

class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length)
        this.gear = gear
    } 
    print() {
        super.print()
        console.log(`Bring your ${this.gear.join(" and your ")}`)
    }
}
// Note: Above ONLY establishes a subclass; won't execute anything
// Now create an instance of it!

const trip = new Expedition("Cima Catinaccio", 3,
                ["imbracatura", "scarponi", "impermeabile" , "moschettoni"])
trip.print()

// ES6 Modules