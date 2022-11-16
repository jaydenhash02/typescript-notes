const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
}

// Type alias
type Drink = [string, boolean, number]

// turn into a tuple
// define order of elements
const pepsi: Drink = ["brown", true, 40]
const sprite: Drink = ["clear", true, 40]
const tea: Drink = ["brown", false, 0]

const carSpecs: [number, number] = [400, 3354]

// use an object rather than a tuple tbh
const carStats = {
  horsepower: 400,
  weight: 3354
}

// error message here
// first index needs to be a string
// pepsi[0] = 40
