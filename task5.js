// Rewrite function with Class
class Car{
    constructor(brand, model, speed){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    accelerate(amount){
        this.speed += amount;
    }
    brake(amount) {
        this.speed -= amount;
    }
    status(){
        return this.brand + this.model + " running at " + this.speed + " km/h";
    }
}

// Now use create a Car object using the class
let car = new Car("Renault", "Scenic", 60);

console.log(car); 
console.log(car.status()); 

// Then create additinal class CarColor, exteds from the Car class and add new method carColor() in this class
// which return brand model and car color

class CarColor extends Car(){
    constructor(brand, model, color){
        super(brand, model);
        this.color = color;
        }
    carColor(){
        
        return this.brand + this.model + this.color;
    }
}

car = new CarColor("Renault", "Scenic", "Red"); //TODO: add somethhing for fixing exceprion Uncaught TypeError: Class constructor Car cannot be invoked without 'new'

console.log(car);
console.log(car.carColor());