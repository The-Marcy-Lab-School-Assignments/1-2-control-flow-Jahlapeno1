const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought')
  } else if (inches < 2) {
    console.log('dry')
  } else if (inches < 4) {
    console.log('average')
  } else if (inches < 6) {
    console.log('rainy')
  } else if (inches >= 6) {
    console.log('flood')
  }
};

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    console.log('Hiss hiss!')
  } else if (breed === 'cat') {
    if (age < 5) {
      console.log('Mew mew!')
    } else {
      console.log('Meow meow!')
    }
  } else if (breed === 'dog') {
    if (age < 5) {
      console.log('Arf arf!')
    } else if (age >= 5 && age < 10) {
      console.log('Woof woof!')
    } else {
      console.log('Boof!')
    }
  } else {
    console.log('Happy birthday!')
  }
};

// happyBirthdayPet('snake', 4)
// happyBirthdayPet('cat', 4)
// happyBirthdayPet('cat', 5)
// happyBirthdayPet('dog', 4)
// happyBirthdayPet('dog', 5)
// happyBirthdayPet('dog', 10)
// happyBirthdayPet('zebra', 10)

const funTypes = jsType => {
  if (typeof jsType === 'string') {
    console.log("That's just some text.");
  } else if (typeof jsType === 'number') {
    // since NaN is technically a number data type according to 'typeof' than another if statement is needed
    if (isNaN(jsType)) {
      console.log("Well, now you're just showing off.");
    } else {
      console.log("That's a good number.");
    }
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?");
  } else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.");
  } else if (typeof jsType === 'object') {
    // since null and arrays count as objects, I put another if else statement inside to filter them out
    if (jsType === null) {
      console.log("Nothing, and I did set that.");
    } else if (Array.isArray(jsType)) {
      console.log("I order you to be indexed.");
    } else {
      console.log("Anybody got the key?");
    }
  }
};

// funTypes(NaN)

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float)
  } else if (roundingSetting === 'down') {
    return Math.floor(float)
  } else if (roundingSetting === 'honest') {
    return Math.round(float)
  }
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
