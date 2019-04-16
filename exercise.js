/* Lightning Exercise 1: Given two options of data structures - array or object - which should you use? 
You need to represent a red 2015 Ford Mustang in your code. */
const car = {
    model: "Mustang",
    make: "Ford",
    year: " 2015",
    color: "red"
}
console.table(car)

/* Lightning Exercise 2: Given two options of data structures - array or object - which should you use?
 You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy",
"Angus", "Seymour Bouts", and "Sharky". */
let animalNames = ["Kipper", "Jack", "Gypsy", "Angus", "Seymour Bouts", "sharky"];
console.log(animalNames[2])


/* Lightning Exercise 3: Define an object for four family members, and put each object in an array named
 familyMembers. Each family member object that you create should have the same keys on them,
  but the values will be different. */

let familyMember = [
    father = {
        name: "David",
        age: 33,
    },
    mother = {
        name: "Emily",
        age: 30,
    }
]


/* Lightning Exercise: Given the object below, output each of the values to the console using dot notation. */
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(wardrobe.height)
console.log(wardrobe.manufacturer)
console.log(wardrobe.contents)
console.log(wardrobe.depth)
console.log(wardrobe.width)
// You can also use dot notation to create a new key on an object if you need to.
let newHeight = wardrobe.height = 65;
console.log(wardrobe.height)


                            // using square bracket notations
let lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
}
console.log("this is the not updated breed ", lassie["breed"])
// adding values using square bracket
lassie["breed"] = "Bull dog"
console.log("this is the updated breed", lassie["breed"])


                            // extra examples
    // Breed is the key you want to get the value of in the object below
    const keyLookUp = "breed";
    console.log(keyLookUp)

//Use the value of `keyToLookup` to get the value you want

let lassies = {
    age: 7,
    breed: "German sheverd",
    color: "White and Brown"
}
const lassiesBreed = lassies[keyLookUp];
console.log(lassiesBreed)


/* Lightning Exercises
Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below. */

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(`the dimensions of the Empire state building is height of ${empireStateBuilding.height}, square feet of ${empireStateBuilding.squareFeet} and also ${empireStateBuilding.eastWestLength} east-west ${empireStateBuilding.northSouthLength}`)
console.log()