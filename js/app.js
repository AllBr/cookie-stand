
/* Lab 07 JavaScript file. Allen Brazier
*/

// access HTML ID where generated HTML will be inserted
//
let htmlContent = document.getElementById('content');

// using the provided location data, generates a random number. Taken from example in class on Monday/Tuesday.
//
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// Holds object data which is pushed onto the array
//
let locationDataArray = [];

// This is the location object that represents each store's location
// 
function Location(name, minCustomers, maxCustomers, averageCookies) {
  this.totalCookies = 0;
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.CookiesAnHour = [];
  locationDataArray.push(this);
}

// Calculates cookies for every hour of the day
// 
Location.prototype.computeStoreData = function () {
  // while i < 14 because there are 14 business hours
  for (i = 0; i < 14; i++) {
    this.CookiesAnHour[i] = Math.floor(generateRandomNumber(this.minCustomers, this.maxCustomers) * this.averageCookies);
    this.totalCookies = this.totalCookies + Math.floor(generateRandomNumber(this.minCustomers, this.maxCustomers) * this.averageCookies);
  }
};

// variable which holds the business hours
//
let businessHours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

// append TR to htmlContent (think of a better function/variable name?)
//
function createHead() {
  let rowHead = document.createElement('tr');
  console.log(rowHead);
  htmlContent.appendChild(rowHead);

  // This pushes the store hours and total labels over 1 space so that there is no time above the first columnm, which is store location
  //
  let firstHeaderEmpty = document.createElement('th');
  rowHead.appendChild(firstHeaderEmpty);


  // for loop to create table headers
  //
  for (i = 0; i < businessHours.length; i++) {
    let tableHeaders = document.createElement('th');
    tableHeaders.innerText = `${businessHours[i]}`;
    rowHead.appendChild(tableHeaders);
  }

  // the header for the column that displays cookie totals
  //
  let cookiesTotal = document.createElement('th');
  cookiesTotal.innerText = 'Cookies total!';
  rowHead.appendChild(cookiesTotal);
}

// This is the location prototype that generates each location row
//
Location.prototype.generateLocation = function () {

  let tableRow = document.createElement('tr');
  htmlContent.appendChild(tableRow);

  // location td
  let tdLocation = document.createElement('td');
  tdLocation.innerText = `${this.name}`;
  tableRow.appendChild(tdLocation);

  // create elements which display cookie data within
  //
  for (i = 0; i < this.CookiesAnHour.length; i++) {
    let td = document.createElement('td');
    td.innerText = `${this.CookiesAnHour[i]}`;
    tableRow.appendChild(td);
  }

  // create elements that contain totals
  //
  let tableDataTotal = document.createElement('td');
  tableDataTotal.innerText = `${this.totalCookies}`;
  tableRow.appendChild(tableDataTotal);
};

// new instance of each location, including the given ranges from the assignment
//
// Seattle: 23 mi / cust, 65 max/ cust, 6.3 average cookie / sale
//
new Location('Seattle', 23, 65, 6.3);
// Tokyo: 23 mi / cust, 65 max/ cust, 6.3 average cookie / sale
//
new Location('Tokyo', 3, 24, 1.2);
// Dubai: 3 mi / cust, 24 max/ cust, 1.2 average cookie / sale
//
new Location('Dubai', 11, 38, 3.7);
// Paris: 11 mi / cust, 38 max/ cust, 3.7 average cookie / sale
//
new Location('Paris', 20, 38, 2.3);
// Lima: 20 mi / cust, 38 max/ cust, 2.3 average cookie / sale
//
new Location('Lima', 2, 16, 4.6);
//
// Locations end


// function generateLocations();
//
function generateLocations() {
  createHead();
  for (let i = 0; i < locationDataArray.length; i++) {
    locationDataArray[i].computeStoreData();
    locationDataArray[i].generateLocation();
  }
}

// Finally, call function
//
generateLocations();
