// import React, { Component } from 'react'
// ch4: Pure React
// React: library for creating views  [...remember: m-V-t]
// ReactDOM: library used to render UI in browser

// React.createElement("h1", {id:"recipe-0", datatype: "title"}, "Baked Salmon")


let dish = React.createElement("h1", null, "Baked Salmon")
ReactDOM.render(dish, document.getElementById("react-container"))

console.log('dish', dish)

// Effectively, this is desired result...
// React.createElement("ul", {"className": "ingredients"},
//     React.createElement("li", null, "1 lb. Salmon" ),
//     React.createElement("li", null, "1 cup Pine Nuts" ),
//     React.createElement("li", null, "2 cups Butter Lettuce"),
//     React.createElement("li", null, "1 Yellow Squash"),
//     React.createElement("li", null, "1/2 cup of Olive Oil"),
//     React.createElement("li", null, "3 cloves of garlic")
// );  


// React.createElement(
//     "ul",
//     {className: "ingredients"},
//     // function is invoked for every item in the array [i]
//     items.map((ingredient, i) =>
//     // {key: i} adds an index number for each item in the array
//         React.createElement("li", {key: i}, ingredient)
//     ))

let items = [
    "1 lb. Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup of Olive Oil",
    "3 cloves of garlic",    
]
// Restart at 
// const IngredientsList = React.createClass({
//     displayName: "IngredientsList",
//     renderListItem(ingredient, i) {
//       return React.createElement("li", { key: i }, ingredient)
//     },
//     render() {
//       return React.createElement("ul", {className: "ingredients"},
//           this.props.items.map(this.renderListItem)
//       )
//     }
//   })