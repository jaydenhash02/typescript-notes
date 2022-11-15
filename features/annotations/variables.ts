// type inference: typescript guesses the type
let apples = 5

// we tell typescript the type
let speed: string = "fast"
let hasName: boolean = true

speed.toUpperCase()

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array of strings
let colors: string[] = ["red", "green", "blue"]
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false]

// Classes
class Car {}

let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
// define what the parameters are and what it returns
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
// do not use any type if you can

const json = '{"x": 10, "y": 20}' // json needs double quotes in string
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates) // {x: 10, y:20}

// 2) When we declare a variable on one line 
// and initialize it later
let words = ["red" , "green", "blue"]
let foundWord: boolean = false

if (words.includes("green")) {
  foundWord = true
}

console.log(foundWord)

// 3) Variable whose type cannot be inferred correctly 
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let num of numbers) {
  if (num > 0) {
    numberAboveZero = num
  }
}