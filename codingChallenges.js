// Coding Challenge #2: CarCL Class
class CarCL {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // Speed in km/h
    }
  
    // Method to accelerate by increasing speed by 10 km/h
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} going at ${this.speed} km/h`);
    }
  
    // Method to brake by decreasing speed by 5 km/h
    brake() {
      this.speed -= 5;
      console.log(`${this.make} going at ${this.speed} km/h`);
    }
  
    // Getter for speed in mi/h
    get speedUS() {
      return this.speed / 1.6; // Convert km/h to mi/h
    }
  
    // Setter for speed in mi/h
    set speedUS(speed) {
      this.speed = speed * 1.6; // Convert mi/h to km/h
    }
  }
  
  // Test the CarCL class
  const car1 = new CarCL('Ford', 120);
  console.log(`Initial speed in km/h: ${car1.speed}`);
  car1.accelerate();        // Ford going at 130 km/h
  car1.brake();             // Ford going at 125 km/h
  console.log(`Speed in mi/h: ${car1.speedUS.toFixed(2)}`);
  car1.speedUS = 75;       // Set speed in mi/h
  console.log(`Speed in km/h after setting speedUS: ${car1.speed}`);
  

  // Coding Challenge #3: Car and EV Classes
  class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Method to accelerate by increasing speed by 10 km/h
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} going at ${this.speed} km/h`);
    }
  
    // Method to brake by decreasing speed by 5 km/h
    brake() {
      this.speed -= 5;
      console.log(`${this.make} going at ${this.speed} km/h`);
    }
  }
  
  class EV extends Car {
    constructor(make, speed, charge) {
      super(make, speed);
      this.charge = charge; // Charge in percentage
    }
  
    // Method to set the battery charge
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
      console.log(`Battery charged to ${this.charge}%`);
    }
  
    // Overridden method to accelerate, increasing speed by 20 km/h and decreasing charge by 1%
    accelerate() {
      this.speed += 20;
      this.charge -= 1;
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
  }
  
  // Test the EV class
  const tesla = new EV('Tesla', 120, 23);
  console.log(`Initial speed: ${tesla.speed} km/h, Initial charge: ${tesla.charge}%`);
  tesla.accelerate();       // Tesla going at 140 km/h, with a charge of 22%
  tesla.brake();            // Tesla going at 135 km/h
  tesla.chargeBattery(90); // Battery charged to 90%
  tesla.accelerate();       // Tesla going at 155 km/h, with a charge of 89%
  
  
  