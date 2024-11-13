import { informationCard, copper } from './objects.js';

// accessing own properties by dot notation
console.log("Accessing properties by dot notation");
console.log(informationCard.fistName);
console.log(informationCard.lastName);
console.log(informationCard.Age);

// accessing own properties by providing key as a string
console.log("\nAccessing property by providing key as a string:");
console.log(informationCard["lastName"]);
console.log(informationCard["contactDetails"]["homeAddress"]);

// accessing nested properties
console.log("\nAccessing nested properties:");
console.log(informationCard.contactDetails.homeAddress);
console.log(informationCard.contactDetails.phoneNumber);

// new properties can be added
informationCard.date = new Date();
console.log(informationCard.date);

//iterating through object properties
for(let key in copper){
    if(copper.hasOwnProperty(key)){
    console.log(`Property: ${key}, Value:${copper[key]}`);
    }
}