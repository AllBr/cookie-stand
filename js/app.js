// Note: 17 Mar 2022 - Refactored during lab time with some assistance, in order to prepare to implement Lab: 09

// 'use strict' included standard in all 201 files
//
'use strict';

// math function from Monday class demo
function randomNum(min, max) {
  let randomNum = Math.random() * (max - min + 1) + min;
  return randomNum;
}



// globals
let table = document.getElementById('content');
let totalForGivenDay = 0;
let locationArray = [];
let tableFootSelector = document.createElement('tfoot');
table.appendChild(tableFootSelector);
let businessHours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let hourlyProd = function() {
  let hourlyProdZeroes = [];
  for(let i = 0; i < businessHours.length; i = i + 1) {
    hourlyProdZeroes.push(0);
  }
  return hourlyProdZeroes;
} ();

// average customer data
LocationData.prototype.averageCustomer = function() {
  for(let i = 0; i < businessHours.length; i = i + 1) {
    this.cookies[i] = Math.floor(randomNum(this.minCustomer, this.maxCustomer) * this.average);
    this.cookieSum += this.cookies[i];
    totalForGivenDay += this.cookies[i];
  }
};

function TotalForHour() {
  for(let j = 0; j < businessHours.length; j = j + 1) {
    for(let k = 0; k < locationArray.length; k++) {
      hourlyProd[j] += locationArray[k].cookies[j];
    }
  }
}

function LocationData(location, minCustomer, maxCustomer, average) {
  this.cookieSum = 0;
  this.cookies = [0];
  this.location = location;
  this.average = average;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  locationArray.push(this);
}




// new instance of each location, plus note about the given inputs from the assignment
// Seattle: 23 min / cust, 65 max/ cust, 6.3 average cookie / sale
new LocationData('Seattle', 23, 65, 6.3);
// Tokyo: 3 min / cust, 65 max/ cust, 6.3 average cookie / sale
new LocationData('Tokyo', 3, 24, 1.2);
// Dubai: 11 min / cust, 24 max/ cust, 1.2 average cookie / sale
new LocationData('Dubai', 11, 38, 3.7);
// Paris: 20 min / cust, 38 max/ cust, 3.7 average cookie / sale
new LocationData('Paris', 20, 38, 2.3);
// Lima: 2 min / cust, 38 max/ cust, 2.3 average cookie / sale
new LocationData('Lima', 2, 16, 4.6);


// body
LocationData.prototype.render = function() {
  let tableBody = document.createElement('tbody');
  let th = document.createElement('th');
  
  table.appendChild(tableBody);
  th.textContent = this.location;
  tableBody.appendChild(th);
  
  for(let i = 0; i < this.cookies.length; i = i + 1) {
    let td = document.createElement('td');
    td.textContent = this.cookies[i];
    tableBody.appendChild(td);
  }
  
  let td = document.createElement('td');
  td.textContent = this.cookieSum;
  tableBody.appendChild(td);
};

// footer
function tableFooter() {
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tableFootSelector.appendChild(th);

  for(let i = 0; i < hourlyProd.length; i = i + 1) {
    let th = document.createElement('th');
    th.textContent = hourlyProd[i];
    tableFootSelector.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = totalForGivenDay;
  tableFootSelector.appendChild(th);
}


// table head
function tableHead() {
  let varTableHead = document.createElement('thead');
  table.appendChild(varTableHead);
  let th = document.createElement('th');
  th.textContent = '';
  varTableHead.appendChild(th);
  
  for(let i = 0; i < businessHours.length; i = i + 1) {
    let th = document.createElement('th');
    th.textContent = `${businessHours[i]}`;
    varTableHead.appendChild(th);
  }
  
  th = document.createElement('th');
  th.textContent = 'Daily Total';
  varTableHead.appendChild(th);
}


function generateLocations() {
  tableHead();
  for(let i = 0; i < locationArray.length; i = i + 1) {
    locationArray[i].averageCustomer();
    locationArray[i].render();
  }
  TotalForHour();
  tableFooter();
}

generateLocations();

// Form addition from Lab: 09
let storeForm = document.getElementById('locationForm');
storeForm.addEventListener('submit', submitPressed);

function submitPressed(event) {
  // prevent default to prevent form attempting to send to a backend
  event.preventDefault();

  let location = event.target.location.value;
  let average = +event.target.average.value;
  let minimumCustomer = +event.target.minCustomer.value;
  let maximumCustomer = +event.target.maxCustomer.value;


  let submittedLocation = new LocationData(location, minimumCustomer, maximumCustomer, average);
  submittedLocation.averageCustomer();
  submittedLocation.render();

  tableFootSelector.innerHTML = null;
  for(let i = 0; i < hourlyProd.length; i = i + 1) {
    hourlyProd[i] = 0;
  }
  TotalForHour();
  tableFooter();
}
