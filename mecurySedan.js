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
    this.scheduleService = false;
  }
  maitLight() {
    if(this.mileage >= 10000) {
        this.scheduleService = true
        //console.log('Schedule Service') i dont have anyt vale at the end of this function
        return this.scheduleService;
    }
  }
  loadPassenger(num) {
      if(this.passenger < this.maximumPassengers) {
          if((num + this.passenger) <= this.maximumPassengers) {
              this.passenger = num
              return this.passenger;
              //console.log(this.passenger) again, no value after function runs... whateever number is entered BECOMES this.passagner, then checks against this.max
          } 
          else {
          console.log(this.make + " "+ this.make + 'will not fit that many passengers.')
      }
  }
}
//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "dirt bag brown",
  "10001"
);
console.log(v.make);
