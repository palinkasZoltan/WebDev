export const informationCard = {
    fistName: "Alice",
    lastName: "Smith", 
    Age: 25,
    contactDetails: {
        homeAddress: "123 Main St, Apt 48",
        phoneNumber: "555-123-4567",
    }
}

export const student = {
    name: "Pauline Reilly",
    age: 24,
    major: "Humanities",
};

export const user = {
    name: "Sarah",
    age: 32,
    hobbies: {
        outdoor: "hiking",
        indoor: "painting",
    },
    preferences: {
        music: "jazz",
        movieGenre: "sci-fi",
    },
}

export const copper = {
    symbol: "Cu",
    atomicNumber: 29,
    meltingPoint: "1984.32 °F",
    appearance: "Red-orange metallic luster",
};

export const car = {
    make: "Ford",
    model: "F-150",
    basePrice: 72000,
    options: {
      leatherSeats: 2400,
      sunroof: 100,
      navigationSystem: 1650,
    },
    calculateTotalPrice() {
      const totalPrice = this.basePrice + this.options.leatherSeats + this.options.navigationSystem + this.options.sunroof;
      console.log("Total price is", totalPrice);
    },
  };

car.calculateTotalPrice();


