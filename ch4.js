// import React, { Component } from 'react'
// ch4: Pure React
// React: library for creating views  [...remember: m-V-t]
// ReactDOM: library used to render UI in browser

// React.createElement("h1", {id:"recipe-0", datatype: "title"}, "Baked Salmon")


let dish = React.createElement("h1", null, "Baked Salmon")
ReactDOM.render(dish, document.getElementById("react-container"))

console.log('dish', dish)