'use strict';

// GLOBAL VARIABLES + WINDOW INTO DOM

let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let allStores = [];

let storeData = document.getElementById('Store-Data');
// let seattle = document.getElementById('Seattle Data');
// let tokyo = document.getElementById('Tokyo Data');
// let dubai = document.getElementById('Dubai Data');
// let paris = document.getElementById('Paris Data');
// let lima = document.getElementById('Lima Data');

// HELPER FUNCTIONS - UTILITIES
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookieStores(name, min, max, averageCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookie = averageCookie;
  this.hourlyCookie = [];
  this.totalCookie = 0;

  allStores.push(this);
}

CookieStores.prototype.getTotalCookie = function () {
  for (let i = 0; i < this.hourlyCookie.length; i++) {
    let thisHour = this.hourlyCookie[i];
    this.totalCookie += thisHour;
  }
};

CookieStores.prototype.calcHourlyCookie = function () {
  for (let i = 0; i < shopHours.length; i++) {
    this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
  }
};

new CookieStores('Seattle', 23, 65, 6.3);
new CookieStores('Tokyo', 3, 24, 1.2);
new CookieStores('Dubai', 11, 38, 3.7);
new CookieStores('Paris', 20, 38, 2.3);
new CookieStores('Lima', 2, 16, 4.6);

allStores[0].calcHourlyCookie();
allStores[0].getTotalCookie();
allStores[1].calcHourlyCookie();
allStores[1].getTotalCookie();
allStores[2].calcHourlyCookie();
allStores[2].getTotalCookie();
allStores[3].calcHourlyCookie();
allStores[3].getTotalCookie();
allStores[4].calcHourlyCookie();
allStores[4].getTotalCookie();

console.log(allStores);

CookieStores.prototype.render = function() {
  let rowElem = document.createElement('tr');
  storeData.appendChild(rowElem);

  let cityName = document.createElement('th');
  cityName.textContent = this.name;
  rowElem.appendChild(cityName);

  for (let i = 0; i < this.hourlyCookie.length; i++) {
    let tableCell = document.createElement('td');
    tableCell.textContent = this.hourlyCookie[i];
    rowElem.appendChild(tableCell);
  }

  let totalsCell = document.createElement('td');
  totalsCell.textContent = this.totalCookie;
  rowElem.appendChild(totalsCell);

  // let row1 = document.createElement('th');
  // row1.textContent = `${shopHours}`;

};

function makeHeader() {
  let rowElem = document.createElement('tr');
  storeData.appendChild(rowElem);

  let cityName = document.createElement('tr');
  rowElem.appendChild(cityName);

  for (let i = 0; i < shopHours.length; i++) {
    let hours = document.createElement('td');
    hours.textContent = shopHours[i];
    rowElem.appendChild(hours);
  }

  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = 'Daily Location Totals';
  rowElem.appendChild(dailyTotal);
}

function makeFooter() {
  let rowElem = document.createElement('tr');
  storeData.appendChild(rowElem);

  let totals = document.createElement('tr');
  totals.textContent = 'Totals';
  rowElem.appendChild(totals);
}

makeHeader();

for (let i = 0; i < allStores.length; i++) {
  allStores[i].render();
}

makeFooter();

// //OBJECT LITERALS
// let seattleStore = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   averageCookie: 6.3,
//   hourlyCookie: [],
//   totalCookie: 0,
//   calcHourlyCookie: function () {
//     for (let i = 0; i < shopHours.length; i++) {
//       this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
//     }
//   },
//   getTotalCookie: function () {
//     for (let i = 0; i < this.hourlyCookie.length; i++) {
//       let thisHour = this.hourlyCookie[i];
//       this.totalCookie += thisHour;
//     }
//   },
//   render: function () {
//     this.calcHourlyCookie();
//     this.getTotalCookie();

//     // let articleElem = document.createElement('article');

//     // let h3Elem = document.createElement('h3');
//     // h3Elem.textContent = this.location;
//     // article.appendChild(h3Elem);

//     seattle.textContent = 'Seattle';
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
//       seattle.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookie} cookies`;
//     seattle.appendChild(liElem);
//   }
// };
// // console.log(seattleStore);

// let tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   averageCookie: 1.2,
//   hourlyCookie: [],
//   totalCookie: 0,
//   calcHourlyCookie: function () {
//     for (let i = 0; i < shopHours.length; i++) {
//       this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
//     }
//   },
//   getTotalCookie: function () {
//     for (let i = 0; i < this.hourlyCookie.length; i++) {
//       let thisHour = this.hourlyCookie[i];
//       this.totalCookie += thisHour;
//     }
//   },
//   render: function () {
//     this.calcHourlyCookie();
//     this.getTotalCookie();
//     tokyo.textContent = 'Tokyo';
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
//       tokyo.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookie} cookies`;
//     tokyo.appendChild(liElem);
//   }
// };
// // console.log(tokyoStore);

// let dubaiStore = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   averageCookie: 3.7,
//   hourlyCookie: [],
//   totalCookie: 0,
//   calcHourlyCookie: function () {
//     for (let i = 0; i < shopHours.length; i++) {
//       this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
//     }
//   },
//   getTotalCookie: function () {
//     for (let i = 0; i < this.hourlyCookie.length; i++) {
//       let thisHour = this.hourlyCookie[i];
//       this.totalCookie += thisHour;
//     }
//   },
//   render: function () {
//     this.calcHourlyCookie();
//     this.getTotalCookie();
//     dubai.textContent = 'Dubai';
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
//       dubai.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookie} cookies`;
//     dubai.appendChild(liElem);
//   }
// };
// // console.log(dubaiStore);

// let parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   averageCookie: 2.3,
//   hourlyCookie: [],
//   totalCookie: 0,
//   calcHourlyCookie: function () {
//     for (let i = 0; i < shopHours.length; i++) {
//       this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
//     }
//   },
//   getTotalCookie: function () {
//     for (let i = 0; i < this.hourlyCookie.length; i++) {
//       let thisHour = this.hourlyCookie[i];
//       this.totalCookie += thisHour;
//     }
//   },
//   render: function () {
//     this.calcHourlyCookie();
//     this.getTotalCookie();
//     paris.textContent = 'Paris';
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
//       paris.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookie} cookies`;
//     paris.appendChild(liElem);
//   }
// };
// // console.log(parisStore);

// let limaStore = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   averageCookie: 4.6,
//   hourlyCookie: [],
//   totalCookie: 0,
//   calcHourlyCookie: function () {
//     for (let i = 0; i < shopHours.length; i++) {
//       this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
//     }
//   },
//   getTotalCookie: function () {
//     for (let i = 0; i < this.hourlyCookie.length; i++) {
//       let thisHour = this.hourlyCookie[i];
//       this.totalCookie += thisHour;
//     }
//   },
//   render: function () {
//     this.calcHourlyCookie();
//     this.getTotalCookie();
//     lima.textContent = 'Lima';
//     for (let i = 0; i < shopHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
//       lima.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookie} cookies`;
//     lima.appendChild(liElem);
//   }
// };
// // console.log(tokyoStore);

// //EXECUTABLE CODE
// seattleStore.render();
// tokyoStore.render();
// dubaiStore.render();
// parisStore.render();
// limaStore.render();
