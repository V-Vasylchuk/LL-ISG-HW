'use strict';

const john = {
  name: 'John',
  age: 30,
  address: {
      city: 'New York',
      country: 'USA'
  },
  hobbies: ['reading', 'cooking']
};

const johnJunior = {
  name: 'John',
  age: 30,
  address: {
      city: 'New York',
      country: 'USA'
  },
  hobbies: ['reading', 'cooking']
};

function compareObjects(firstObj, secondObj) {
  if (firstObj === null || secondObj === null 
      || firstObj === undefined || secondObj === undefined) {
    return false;
  }

  if (typeof firstObj !== 'object' || typeof secondObj !== 'object') {
    return false;
  }

  const keysFromFirstObj = Object.keys(firstObj);
  const keysFromSecondObj = Object.keys(secondObj);

  // Check for the same number of properties
  if (keysFromFirstObj.length !== keysFromSecondObj.length) {
    return false;
  }

  // Equals check for every property
  for (let key of keysFromFirstObj) {
    // Recursive compare if obgects
    if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
      if (!compareObjects(firstObj[key], secondObj[key])) {
        return false;
      }
    } else {
      // Simple compare
      if (firstObj[key] !== secondObj[key]) {
        return false;
      }
    }
  }

  return true;
}

console.log(compareObjects(john, johnJunior));
