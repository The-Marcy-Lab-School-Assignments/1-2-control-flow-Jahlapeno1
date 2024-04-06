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

const funTypes = () => {
};

const rounder = () => {
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
