class Car {
  // Define properties
  make: string
  model: string
  year: number

  // Constructor to initialize the car properties
  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }

  // Method to calculate the car's age
  getCarAge(): number {
    const currentYear = new Date().getFullYear()
    return currentYear - this.year
  }
}

// Sample Input and Output
const car = new Car("Honda", "Civic", 2018)
console.log(car.getCarAge()) // Output: 6 (assuming current year is 2024)
