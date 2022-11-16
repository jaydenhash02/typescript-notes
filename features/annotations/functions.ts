const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
  return undefined
}

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message)
  }
}

const forecast = {
  date: new Date(),
  weather: "Sunny",
}

const logWeather = ({ date, weather }: { date: Date; weather: String }): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast)