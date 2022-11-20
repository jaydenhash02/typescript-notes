import { faker } from "@faker-js/faker"
// .d.ts is a type definition file
// Capital name to create and export as a class

// export it so other files can use it
export class User {
  // havent initialised these variables yet
  name: string
  location: {
    lat: number
    lng: number
  }

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

