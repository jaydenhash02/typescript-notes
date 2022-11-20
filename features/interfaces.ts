// use generic term
// needs a function called summary that returns string
interface Reportable {
  summary(): string
}

// has to have all the properties in the interface
const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

// can use printSummary function because both objects have the interface Reportable
printSummary(oldCivic)
printSummary(drink)
