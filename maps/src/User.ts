import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"
// .d.ts is a type definition file
// Capital name to create and export as a class

// export it so other files can use it
export class User implements Mappable {
  // havent initialised these variables yet
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string = "red"

  constructor() {
    this.name = faker.name.firstName("male")
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
