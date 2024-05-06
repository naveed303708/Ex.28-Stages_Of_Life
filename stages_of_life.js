"use strict";
// stages of the life: write an if-else chain that detarmines a person's stage of life.
// set a value for the variable age, and then:
let age = 25;
// . if the person is less than 2 years old, print a message that the person is a baby.
// . if the person is less than 2 years old, but less 4,than the person is a toodler.
//. if the person is less than 4 years old, but less 13, than the person is a kid.
// . if the person is less than 13 years old, but less 20, than that the person is teenager.
// . if the person is less than 20 years old, but less 65, than the person is a adult.
// . if the person is less than 2 years old, print a message that the person is a elder.
if (age < 2) {
    console.log("person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toodler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("person is a adult.");
}
else {
    console.log("person is an elder.");
}
