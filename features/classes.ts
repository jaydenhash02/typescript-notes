class Vehicle {

  // use modifier on variable
  // assign as instance variable too
  constructor(public color: string) {
    this.color = color
  }
  
  protected honk(): void {
    console.log("beep")
  }
}

const vehicle = new Vehicle("orange")
console.log(vehicle.color)

class Car extends Vehicle {
  // no need to recreate color, so dont need modifier
  constructor(public wheels: number, color: string) {
    super(color)
  }

  // override method in parent class
  private drive(): void {
    console.log("vroom")
  }

  // can only call private methods witin the same class
  startDrivingProcess(): void {
    this.drive()
    // so child class can call protected methods
    this.honk()
  }
}

const car = new Car(4, "red")
car.startDrivingProcess()