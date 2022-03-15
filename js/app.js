// Lab 06 JavaScript file.


// connects to HTML to fill-in content via JS
let cityContent = document.getElementById('content');

// random number gen, same as used in class
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Seattle Object Literal
let seattle = {
  city: 'Seattle',
  cityNumber: 1,
  minCustomersAnHour: 23,
  maxCustomersAnHour: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesTotal: 0,
  cookiesAnHour: [0],
  
  // generate a random number of customers
  generateRandomCustomers: function () {
    return generateRandomNumber(this.minCustomersAnHour, this.maxCustomersAnHour);
  },
  // calculate cookies, 14 hours
  storeData: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesAnHour[i] = Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
      this.cookiesTotal = this.cookiesTotal + Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
    }
  },
  // HTML begin
  displaySchedule: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = `Location: ${this.city}`;
    cityContent.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    cityContent.appendChild(ulElement);

    // hour text
    let hourOfTheDay = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
    // <li>, again 14 different hours
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liElement = document.createElement('li');
      liElement.innerText = `${hourOfTheDay[i]}: ${this.cookiesAnHour[i]} cookies`;
      cityContent.appendChild(liElement);
    }
    // final <li> element, the total
    let liElement = document.createElement('li');
    liElement.innerText = `${this.cookiesTotal} cookies total!`;
    cityContent.appendChild(liElement);

    // to make some space
    let brElement = document.createElement('br');
    cityContent.appendChild(brElement);
  }
};

// call functions Seattle
seattle.generateRandomCustomers();
seattle.storeData();
seattle.displaySchedule();

// Tokyo Object Literal
let tokyo = {
  city: 'Tokyo',
  cityNumber: 2,
  minCustomersAnHour: 3,
  maxCustomersAnHour: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesTotal: 0,
  cookiesAnHour: [0],
  
  // generate a random number of customers
  generateRandomCustomers: function () {
    return generateRandomNumber(this.minCustomersAnHour, this.maxCustomersAnHour);
  },
  // calculate cookies, 14 hours
  storeData: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesAnHour[i] = Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
      this.cookiesTotal = this.cookiesTotal + Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
    }
  },
  // HTML begin
  displaySchedule: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = `Location: ${this.city}`;
    cityContent.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    cityContent.appendChild(ulElement);

  // hour text
    let hourOfTheDay = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
    // <li>, again 14 different hours
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liElement = document.createElement('li');
      liElement.innerText = `${hourOfTheDay[i]}: ${this.cookiesAnHour[i]} cookies`;
      cityContent.appendChild(liElement);
    }
    // final <li> element, the total
    let liElement = document.createElement('li');
    liElement.innerText = `${this.cookiesTotal} cookies total!`;
    cityContent.appendChild(liElement);

    // make some space
    let brElement = document.createElement('br');
    cityContent.appendChild(brElement);
  }
};

// call functions Tokyo
tokyo.generateRandomCustomers();
tokyo.storeData();
tokyo.displaySchedule();


// Dubai Object Literal
let dubai = {
  city: 'Dubai',
  cityNumber: 3,
  minCustomersAnHour: 11,
  maxCustomersAnHour: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesTotal: 0,
  cookiesAnHour: [0],
  
  // generate a random number of customers
  generateRandomCustomers: function () {
    return generateRandomNumber(this.minCustomersAnHour, this.maxCustomersAnHour);
  },
  // calculate cookies, 14 hours
  storeData: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesAnHour[i] = Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
      this.cookiesTotal = this.cookiesTotal + Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
    }
  },
 // HTML begin
  displaySchedule: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = `Location: ${this.city}`;
    cityContent.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    cityContent.appendChild(ulElement);

  // hour text
    let hourOfTheDay = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
    // <li>, again 14 different hours
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liElement = document.createElement('li');
      liElement.innerText = `${hourOfTheDay[i]}: ${this.cookiesAnHour[i]} cookies`;
      cityContent.appendChild(liElement);
    }
    // final <li> element, the total
    let liElement = document.createElement('li');
    liElement.innerText = `${this.cookiesTotal} cookies total!`;
    cityContent.appendChild(liElement);

    // to make some space
    let brElement = document.createElement('br');
    cityContent.appendChild(brElement);
  }
};

// call functions Dubai
dubai.generateRandomCustomers();
dubai.storeData();
dubai.displaySchedule();

// Paris Object Literal
let paris = {
  city: 'Paris',
  cityNumber: 4,
  minCustomersAnHour: 20,
  maxCustomersAnHour: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesTotal: 0,
  cookiesAnHour: [0],
  
  // generate a random number of customers
  generateRandomCustomers: function () {
    return generateRandomNumber(this.minCustomersAnHour, this.maxCustomersAnHour);
  },
  // calculate cookies, 14 hours
  storeData: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesAnHour[i] = Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
      this.cookiesTotal = this.cookiesTotal + Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
    }
  },
 // HTML begin
  displaySchedule: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = `Location: ${this.city}`;
    cityContent.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    cityContent.appendChild(ulElement);

  // hour text
    let hourOfTheDay = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
    // <li>, again 14 different hours
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liElement = document.createElement('li');
      liElement.innerText = `${hourOfTheDay[i]}: ${this.cookiesAnHour[i]} cookies`;
      cityContent.appendChild(liElement);
    }
    // final <li> element, the total
    let liElement = document.createElement('li');
    liElement.innerText = `${this.cookiesTotal} cookies total!`;
    cityContent.appendChild(liElement);

    // to make some space
    let brElement = document.createElement('br');
    cityContent.appendChild(brElement);
  }
};

// call functions Paris
paris.generateRandomCustomers();
paris.storeData();
paris.displaySchedule();

// Lima Object Literal
let lima = {
  city: 'Lima',
  cityNumber: 5,
  minCustomersAnHour: 2,
  maxCustomersAnHour: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesTotal: 0,
  cookiesAnHour: [0],
  
  // generate a random number of customers
  generateRandomCustomers: function () {
    return generateRandomNumber(this.minCustomersAnHour, this.maxCustomersAnHour);
  },
  // calculate cookies, 14 hours
  storeData: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesAnHour[i] = Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
      this.cookiesTotal = this.cookiesTotal + Math.floor(this.generateRandomCustomers() * this.averageCookiesPerCustomer);
    }
  },
 // HTML begin
  displaySchedule: function () {
    let h2Element = document.createElement('h2');
    h2Element.innerText = `Location: ${this.city}`;
    cityContent.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    cityContent.appendChild(ulElement);

  // hour text
    let hourOfTheDay = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
    // <li>, again 14 different hours
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liElement = document.createElement('li');
      liElement.innerText = `${hourOfTheDay[i]}: ${this.cookiesAnHour[i]} cookies`;
      cityContent.appendChild(liElement);
    }
    // final <li> element, the total
    let liElement = document.createElement('li');
    liElement.innerText = `${this.cookiesTotal} cookies total!`;
    cityContent.appendChild(liElement);

    // to make some space
    let brElement = document.createElement('br');
    cityContent.appendChild(brElement);
  }
};

// call functions Lima
lima.generateRandomCustomers();
lima.storeData();
lima.displaySchedule();
