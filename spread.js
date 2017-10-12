// spread operator ... 


// function spreader() { 
//     let x = [1,2,3]
//     let y = ["x", "y", "z"]
//     return x + y
// }

// console.log(spreader())


function spreader() { 
    let x = [1,2,3]
    let y = ["x", "y", "z"]
    return [...x , ...y]
}

console.log(spreader())