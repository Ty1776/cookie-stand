'use strict';

// console.log('sales data');
// GLOBAL VARIABLES + WINDOW INTO DOM
// * min/max hourly customers
let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// let cookieSales = document.getElementById('Sales Data');
// console.dir(cookieSales);
let seattle = document.getElementById('Seattle Data');
let tokyo = document.getElementById('Tokyo Data');
let dubai = document.getElementById('Dubai Data');
let paris = document.getElementById('Paris Data');
let lima = document.getElementById('Lima Data');

// HELPER FUNCTIONS - UTILITIES
// *generate random customers per hour
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function getTotalCookie() {
//   for (let i = 0; i < this.hourlyCookie.length; i++) {
//     let thisHour = this.hourlyCookie[i];
//     // totalCookie = totalCookie + thisHour;
//     return this.totalCookie += thisHour;
//     // hourlyCookie + shopHours[i]; 
//   }
// }

//OBJECT LITERALS
let seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  averageCookie: 6.3,
  hourlyCookie: [],
  totalCookie: 0,
  calcHourlyCookie: function () {
    for (let i = 0; i < shopHours.length; i++) {
      this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
    }
  },
  getTotalCookie: function () {
    for (let i = 0; i < this.hourlyCookie.length; i++) {
      let thisHour = this.hourlyCookie[i];
      this.totalCookie += thisHour;
    }
  },
  render: function () {
    this.calcHourlyCookie();
    this.getTotalCookie();
    seattle.textContent = 'Seattle';
    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
      seattle.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookie} cookies`;
    seattle.appendChild(liElem);
  }
};
console.log(seattleStore);

let tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  averageCookie: 1.2,
  hourlyCookie: [],
  totalCookie: 0,
  calcHourlyCookie: function () {
    for (let i = 0; i < shopHours.length; i++) {
      this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
    }
  },
  getTotalCookie: function () {
    for (let i = 0; i < this.hourlyCookie.length; i++) {
      let thisHour = this.hourlyCookie[i];
      this.totalCookie += thisHour;
    }
  },
  render: function () {
    this.calcHourlyCookie();
    this.getTotalCookie();
    tokyo.textContent = 'Tokyo';
    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
      tokyo.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookie} cookies`;
    tokyo.appendChild(liElem);
  }
};
console.log(tokyoStore);

let dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  averageCookie: 3.7,
  hourlyCookie: [],
  totalCookie: 0,
  calcHourlyCookie: function () {
    for (let i = 0; i < shopHours.length; i++) {
      this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
    }
  },
  getTotalCookie: function () {
    for (let i = 0; i < this.hourlyCookie.length; i++) {
      let thisHour = this.hourlyCookie[i];
      this.totalCookie += thisHour;
    }
  },
  render: function () {
    this.calcHourlyCookie();
    this.getTotalCookie();
    dubai.textContent = 'Dubai';
    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
      dubai.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookie} cookies`;
    dubai.appendChild(liElem);
  }
};
console.log(dubaiStore);

let parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  averageCookie: 2.3,
  hourlyCookie: [],
  totalCookie: 0,
  calcHourlyCookie: function () {
    for (let i = 0; i < shopHours.length; i++) {
      this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
    }
  },
  getTotalCookie: function () {
    for (let i = 0; i < this.hourlyCookie.length; i++) {
      let thisHour = this.hourlyCookie[i];
      this.totalCookie += thisHour;
    }
  },
  render: function () {
    this.calcHourlyCookie();
    this.getTotalCookie();
    paris.textContent = 'Paris';
    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
      paris.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookie} cookies`;
    paris.appendChild(liElem);
  }
};
console.log(parisStore);

let limaStore = {
  name: 'Lima',
  min: 2,
  max: 16,
  averageCookie: 4.6,
  hourlyCookie: [],
  totalCookie: 0,
  calcHourlyCookie: function () {
    for (let i = 0; i < shopHours.length; i++) {
      this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
    }
  },
  getTotalCookie: function () {
    for (let i = 0; i < this.hourlyCookie.length; i++) {
      let thisHour = this.hourlyCookie[i];
      this.totalCookie += thisHour;
    }
  },
  render: function () {
    this.calcHourlyCookie();
    this.getTotalCookie();
    lima.textContent = 'Lima';
    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${shopHours[i]}: ${this.hourlyCookie[i]} cookies`;
      lima.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookie} cookies`;
    lima.appendChild(liElem);
  }
};
console.log(tokyoStore);

//EXECUTABLE CODE
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();
