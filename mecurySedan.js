//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
    this.maximumPassengers;
    this.passenger;
    this.numberOfWheels;
    this.maximumSpeed;
    this.fuel;
    this.scheduleService;
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
