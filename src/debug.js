const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  /** FEEDBACK: Google how to get a ranged random number for this question! */
  return Math.floor(Math.random() * max);
};

const coolnessGauge = (numOfFridges) => {
  return numOfFridges <= 3 ? 'You need more fridges.' : 'You are downright chilly!';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

const getWeatherReport = (temperature) => {
  let weatherReport = ""
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature > 31) {
    weatherReport = "It's not too bad!"
    console.log(weatherReport)
  } else if (temperature <= 31) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  }
  console.log("And that's your report!");
  return weatherReport;
};
/** FEEDBACK: Refactor this so that it uses at most only one ternary! */
const returnPositiveNegativeZero = (num) => {
  return num < 0
    ? "Positive"
    : num === 0
      ? "Zero"
      : "Negative";
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
