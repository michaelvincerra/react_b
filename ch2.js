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
var topic = "JavaScript"

if(topic){
    let topic = "React"
    console.log('block scope: ', topic)
}

console.log('global scope: ', topic)
document.write(topic)
/// Using var

var div,
    container = document.getElementById('container')

for (var i=0; i<5; i++) {
    div = document.createElement('div')
    console.log('div')
    div.onclick = function() {
        alert('This is box #' + i)
    }
    container.appendChild(div)
}

// console.log

//// Using let