//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels= 4;
    this.maximumSpeed = 200;
    this.fuel = 100;
    this.scheduleService = 10000;
  }
  loadPassenger() {
      if(this.passenger > this.maximumPassengers) {
          console.log('too many passangers')
      }
  }
  maitLight() {
    if(this.mileage > 10000) {
        console.log('Schedule Service')
    }
  }
}
//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);
