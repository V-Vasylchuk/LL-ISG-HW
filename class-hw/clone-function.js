'use strict';

const obj = {
  cart: [
    {
      id: 2,
      prices: [
        123
      ]
    }
  ],
  userInfo: {
    id: 33,
    bio: {
      name: 'user',
      phone: '+380000000000',
      location: {
        region: 'ua',
        state: 'lv'
      }
    }
  }
}

function cloneObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = cloneObject(obj[key]);
    }
  }

  return clone;
}

console.log(cloneObject(obj));
