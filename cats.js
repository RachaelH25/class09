"use strict";

// create a kitten factory with a constructor function.

function Kitten(name, age, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
    this.name = name;
    this.age = age;
    this.interests = interests;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithOtherCats = isGoodWithOtherCats;
}
// creates new instance of a cat.

// Add a method to JS exisiting number class to calculate cat years in relation to human years.
Number.prototype.calculateAgeInHumanYears = function () {
    return Math.floor((this / 12) * 15);
};

// Add a method to JS existing string object to capitalise first letter of a string.
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Add assignAge method- here we define the function inline
Kitten.prototype.assignAge = function () {
    let months = randomInRange(3, 12);
    this.age = months + " months.";
    this.ageInCatYears = months.calculateAgeInHumanYears;
};

Kitten.prototype.meow = function () {
    console.log(this.name + " says meow.");
};

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Kitten.prototype.render = function () {
    const parentElement = document.getElementById("kittenProfiles");
};
