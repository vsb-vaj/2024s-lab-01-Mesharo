// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
const drawTriangle = (length = 5) => {
  for (let x = 1; x <= length; x++)  {
    let row = "";
    for (let y = 0; y < x; y++)  {
      row += "*";
    }
    console.log(row.split('').join(' '));
  }
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
  // ... write code ...
  for (let x = 0; x < word.length + 1; x++)  {
    let row = "";
    for (let y = 0; y < word.length; y++)  {
      if (y >= x)  {
        row += "*";
      } else  {
        row += word[word.length - y - 1].toUpperCase();
      }
    }
    console.log(row.split('').reverse().join(' '));
  }
};


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
  let result = [];
  for (car of vehicles)  {
    let speeds = car["measuredSpeeds"];
    result.push({
      name: car["name"],
      topSpeed: Math.max(...speeds)
    })
  }
  return result;
};