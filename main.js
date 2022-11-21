const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber

    return sum
}
const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber

    return difference
}
const divide = (firstNumber, secondNumber) => {
    const division = firstNumber / secondNumber

    return division
}
const multiply = (firstNumber, secondNumber) => {
    const multiple = firstNumber * secondNumber

    return multiple
}
const square = (firstNumber) => {
    const squared = firstNumber * firstNumber

    return squared
}

let fourLegs = multiply(60,.25)
let twoLegs = multiply(60,.75)
let fourTotal = divide(fourLegs, 4)
let twoTotal = divide(twoLegs, 2)
let animals = add(fourTotal,twoTotal)

console.log(animals)