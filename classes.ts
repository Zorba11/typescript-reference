export{}
class Vehicle {

  protected honk(): void {
    console.log('beeep');
  }
}

const vehicle = new Vehicle();
vehicle.honk();


class Car extends Vehicle {
  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.startDrivingProcess();
// car.honk();

