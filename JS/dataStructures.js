
// These are objects. They consist of key-value pairs
const person = {
    firstName: "Barney",
    "favorite color": "blue",
    lastName: "Stimson",
    age: 38,
    _height: 181,
    $weight: 93,
    online: true
};

const book = {
    title: "The Cather in the Rye",
    author: "Jerome David Salinger",
    genres: ["Realistic fiction", "Coming-of-age fiction"],
    relevant: true,
    rating: 8.38,
}

// Nested properties
const computer = {
    brand: "Apple",
    model: "MacBook Pro",
    // specifications property is an object in itself
    specifications: {
        processor: "M2",
        memory: "16GB RAM",
        storage: "512GB SSD",
    },
    owner: {
        name: "Emily",
        username: "emily123",
    }
}

// Arrays
const words = ["deer", "horde", "rabbit"];
const numbers = [53.2, 871, 5642];
const data = ["sheep", 91, false, "parrot"];