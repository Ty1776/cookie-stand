'use strict';

// *WINDOW INTO THE DOM*

let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let allStores = [];

let storeData = document.getElementById('Store-Data');

// *HELPER FUNCTIONS*

// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

  let totals = document.createElement('td');
  totals.textContent = 'Totals';
  rowElem.appendChild(totals);

  let dailyTotalCookies = 0;
  for (let i = 0; i < shopHours.length; i++) {
    let allCookiesThisHour = 0;

    for (let j = 0; j < allStores.length; j++) {
      let cookiesThisHour = allStores[j].hourlyCookie[i];
      allCookiesThisHour += cookiesThisHour;
    }
    dailyTotalCookies += allCookiesThisHour;

    let storeTotals = document.createElement('td');
    storeTotals.textContent = allCookiesThisHour;
    rowElem.appendChild(storeTotals);
  }
  let grandTotal = document.createElement('td');
  grandTotal.textContent = dailyTotalCookies;
  rowElem.appendChild(grandTotal);
  console.log(grandTotal);
}

// *CONSTRUCTOR*

function CookieStores(name, min, max, averageCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookie = averageCookie;
  this.hourlyCookie = [];
  this.totalCookie = 0;

  allStores.push(this);
}

CookieStores.prototype.getTotalCookie = function() {
  for (let i = 0; i < this.hourlyCookie.length; i++) {
    let thisHour = this.hourlyCookie[i];
    this.totalCookie += thisHour;
  }
};

CookieStores.prototype.calcHourlyCookie = function() {
  for (let i = 0; i < shopHours.length; i++) {
    this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
  }
};

new CookieStores('Seattle', 23, 65, 6.3);
new CookieStores('Tokyo', 3, 24, 1.2);
new CookieStores('Dubai', 11, 38, 3.7);
new CookieStores('Paris', 20, 38, 2.3);
new CookieStores('Lima', 2, 16, 4.6);

for (let i = 0; i < allStores.length; i++) {
  allStores[i].calcHourlyCookie();
  allStores[i].getTotalCookie();
}

// console.log(allStores);

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
};

// *EXECUTABLE CODE*

makeHeader();

for (let i = 0; i < allStores.length; i++) {
  allStores[i].render();
}

makeFooter();
