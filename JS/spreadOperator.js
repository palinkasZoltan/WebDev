import { user, car } from './objects.js';

//Cloning an object
let clonedCar = {...car};

clonedCar.cloningDate = new Date();

console.log(car);
console.log(clonedCar);

//Extending an object 
const extendedCar = {
    ...car,
    color: "blue",
    engine: "V8"
};

console.log(extendedCar);

//Merging objects
const apartmentFeatures = {
    size: "1200 square feet",
    bedrooms: 2,
    bathrooms: 2,
};
  
const apartmentDetails = {
    rent: 2000,
    location: "Downtown City",
};
  
const apartment = { ...apartmentFeatures, ...apartmentDetails };

console.log(apartment);