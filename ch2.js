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

var name