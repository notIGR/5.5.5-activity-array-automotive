//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

class VehicleProperties extends VehicleModule {
  constructor(
    maximumPassengers,
    passenger,
    numberOfWheels,
    maximumSpeed,
    fuel,
    scheduleService
  ) {
    this.maximumPassengers;
    this.passenger;
    this.numberOfWheels;
    this.maximumSpeed;
    this.fuel;
    this.scheduleService;
  }
  loadPassenger() {}
  scheduleService(){}
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
