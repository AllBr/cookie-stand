// Note: 17 Mar 2022 - Refactored during lab time with some assistance, in order to prepare to implement Lab: 09

// 'use strict' included standard in all 201 files
//
'use strict';



///--check
// math function from class demo ///--check
function randomNum(min, max) {
  let randomNum = Math.random() * (max - min + 1) + min; ///--check
  console.log('**log 1**');
  return randomNum; ///--check
}

// globals
let htmlContent = document.getElementById('content'); ///--check
let totalForGivenDay = 0; ///--check
let locationArray = []; ///--check
let businessHours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']; ///--check
let hourlyProduction = function() {
  let hourlyProductionl = [];
  for(let i = 0; i < businessHours.length; i = i + 1) { ///--check
    console.log('**log 2**');
    console.log(hourlyProductionl + ' hourlyTC');
    hourlyProductionl.push(0);
  }
  return hourlyProductionl;
} ();

//
LocationData.prototype.averageCustomer = function() {
  for(let i = 0; i < businessHours.length; i = i + 1) { ///--check
    console.log('**log 3**');
    this.cookies[i] = Math.floor(randomNum(this.minCust, this.maxCust) * this.average);
    console.log('**log 3.1**');
    totalForGivenDay = totalForGivenDay + this.cookies[i]; ///--check
    console.log('**log 3.2**');
    this.totalCookies = this.totalCookies + this.cookies[i]; ///--check
    console.log('**log 3.3**');

  }
};

// ///--check
function LocationData(store, minCustomer, maxCustomer, average) {
  this.totalCookies = 0; ///--check
  this.cookies = [0]; ///--check
  this.store = store;
  this.average = average;
  this.minCust = minCustomer;
  this.maxCust = maxCustomer;
  locationArray.push(this);
}

// new instance of each location, including the given ranges from the assignment

// Seattle: 23 mi / cust, 65 max/ cust, 6.3 average cookie / sale
new LocationData('Store: Seattle', 23, 65, 6.3); ///--check
// Tokyo: 23 mi / cust, 65 max/ cust, 6.3 average cookie / sale
new LocationData('Store: Tokyo', 3, 24, 1.2); ///--check
// Dubai: 3 mi / cust, 24 max/ cust, 1.2 average cookie / sale
new LocationData('Store: Dubai', 11, 38, 3.7); ///--check
// Paris: 11 mi / cust, 38 max/ cust, 3.7 average cookie / sale
new LocationData('Store: Paris', 20, 38, 2.3); ///--check
// Lima: 20 mi / cust, 38 max/ cust, 2.3 average cookie / sale
new LocationData('Store: Lima', 2, 16, 4.6); ///--check

// head
function tableHead() {
  console.log('**log 4**');
  //vars
  let tableHead = document.createElement('thead');
  let th = document.createElement('th'); ///--check
  htmlContent.appendChild(tableHead);
  th.textContent = 'Location';
  tableHead.appendChild(th);

  for(let i = 0; i < businessHours.length; i = i + 1) { ///--check
    console.log('**log 5**');
    //var
    let th = document.createElement('th');

    th.textContent = `${businessHours[i]}`;
    tableHead.appendChild(th);
  }


  th = document.createElement('th');
  th.textContent = 'Daily Total';
  tableHead.appendChild(th);
}

// footer added in later labs
function tableFooter() {
  console.log('**log 6**');
  // vars
  let th = document.createElement('th'); ///--check
  let tableFootData = document.createElement('tfoot');

  htmlContent.appendChild(tableFootData);
  tableFootData.appendChild(th);
  th.textContent = 'Hourly Totals'; ///--check


  for(let i = 0; i < hourlyProduction.length; i = i + 1) { ///--check
    //var
    let th = document.createElement('th');

    console.log('**log 7**');
    tableFootData.appendChild(th);
    th.textContent = hourlyProduction[i]; ///--check
  }

  th = document.createElement('th');
  tableFootData.appendChild(th); ///--check
  th.textContent = totalForGivenDay;
  
}

// table body
LocationData.prototype.render = function() {
  console.log('**log 8**');
  // vars
  let tableBody = document.createElement('tbody');
  let th = document.createElement('th'); ///--check

  htmlContent.appendChild(tableBody);
  tableBody.appendChild(th);
  th.textContent = this.store; ///--check



  for(let i = 0; i < this.cookies.length; i = i + 1) { ///--check
    console.log('**log 9**');
    // var
    let td = document.createElement('td');

    td.textContent = this.cookies[i];
    tableBody.appendChild(td);
  }
  // var
  let td = document.createElement('td');

  tableBody.appendChild(td);
  td.textContent = this.totalCookies; ///--check
};



///--check
function totalForHour() {
  console.log('***log 10***');
  for(let j = 0; j < businessHours.length; j = j + 1) { ///--check
    for(let k = 0; k < locationArray.length; k = k + 1) { ///--check
      hourlyProduction[j] = hourlyProduction[j] + locationArray[k].cookies[j]; ///--check
    }
  }
}

// output
function renderLocations() {
  console.log('***log 11***');
  tableHead();
  for(let i = 0; i < locationArray.length; i = i + 1) { ///--check
    locationArray[i].averageCustomer();
    console.log('***log 12***');
    locationArray[i].render();
    console.log('***log 13***');
    
  }
  
  totalForHour();
}

// finally, call functions
renderLocations(); ///--check
tableFooter(); ///--check