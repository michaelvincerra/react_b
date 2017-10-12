function divideByFour() {
    const arr = [2, 4, 8, 16, 32, 64]
    const result = arr.map(x => x/4) // Note: Also consider: parseFloat(.33) * 3, or parseFloat(.11)..(.22), etc.
        return result 
}
console.log(divideByFour())

function divideByThree() {
    const arr1 = [86, 172, 344, 688, 1376, 2752]
    const result = arr1.map(x => x/3) 
        return result
}
console.log(divideByThree())

function divideByTwo() {
    const arr1 = [1, 3, 5, 7, 11]
    const result = arr1.map(x => x/parseInt(2)) 
        return result
}
console.log(divideByTwo())

