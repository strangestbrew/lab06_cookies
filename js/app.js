'use strict';

//global array of the hours
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var hourTotals = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

//constructor for new store location
function Outlet(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dayTotal = 0;
  this.cookieArray = [];
  Outlet.list.push(this);
}
Outlet.list = [];

//generates a random number between customer min and customer max
Outlet.prototype.randomNumber = function () {
  return Math.floor(Math.random() * (this.maxCust -this.minCust +1)) + this.minCust;
};

//generates a number of cookies per hour, pushes it into cookieArray
Outlet.prototype.cookieData = function () {
  for (var i = 0; i < times.length; i++ ){
    //var generator = this.randomNumber();
    var cookieData = Math.floor(this.randomNumber * this.avgCookie);
    this.cookieArray.push(cookieData);
    this.dayTotal += cookieData;
    hourTotals[i] += cookieData;
  }
  console.log(hourTotals[i]);
};

//create instances of stores for constructor
new Outlet('Pike Place', 23, 65, 6.5);
new Outlet('SeaTac Airport', 3, 24, 1.2);
new Outlet('Seattle Center', 11, 38, 3.7);
new Outlet('Capitol Hill', 20, 38, 2.3);
new Outlet('Alki Beach', 2, 16, 4.6);


//render the empty table
Outlet.prototype.render = function () {
  var tableBody = document.getElementById('table-body');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);

  for (var i = 0; i < this.cookieArray.length; i++) {
    cell = document.createElement('td');
    cell.textContent = this.cookieArray[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = this.dayTotal;
  tableRow.appendChild(cell);

  tableBody.appendChild(tableRow);
};

//render table body, blank
for (var i = 0; i < Outlet.list.length; i++) {
  Outlet.list[i].render();
}

//Renders the empty cell, hours, then Total header for the table

var cookiesByHour = [];

var renderHours = function() {
  var tableHead = document.getElementById('timeData');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('th');
  cell.textContent = '';
  tableRow.appendChild(cell);
  tableHead.appendChild(tableRow);

  for (var i = 0; i < times.length; i++) {
    cell = document.createElement('th');
    cell.textContent = times[i];
    tableRow.appendChild(cell);
    tableHead.appendChild(tableRow);
  }
  cell = document.createElement('th');
  cell.textContent = 'Total';
  tableRow.appendChild(cell);
  tableHead.appendChild(tableRow);
};

//Renders the cookie data for each location for the table

Outlet.prototype.render = function () {
  var tableBody = document.getElementById('table-body');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.location;
  tableRow.appendChild(cell);

  for (var i = 0; i < times.length; i++) {
    cell = document.createElement('td');
    cell.textContent = this.cookieArray[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = this.totalDaysCookies;
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
};

//Renders the totals by hour, sums, then total of the franchise totals

var tableFooter = document.getElementById('table-foot');
var totalByHourRender = function() {
  var tableRow = document.createElement('tr');

  var cell = document.createElement('td');
  cell.textContent ='Hourly Totals';
  tableRow.appendChild(cell);

  for (var i = 0; i < times.length; i++) {
    cell = document.createElement('td');
    cell.textContent = cookiesByHour[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = '';
  tableRow.appendChild(cell);
  tableFooter.appendChild(tableRow);
};

//calculating the total cookies by hour

var outletSums = [];

function totalStoreSums () {
  for (var i = 0; i < times.length; i++) {
    var hourSum = 0;
    for (var j = 0; j < outletSums.length; j++) {
      hourSum += outletSums[j].cookieArray[i];
    }
    cookiesByHour.push(hourSum);
  }
}

totalStoreSums();

var pageUpdate = function() {
  for (var i = 0; i < outletSums.length; i++) {
    outletSums[i].render();
  }
};

totalByHourRender();
pageUpdate();


//events
var form = document.getElementById('locationForm');

form.addEventListener ('submit', addNewLocation);

function addNewLocation (event) {
  event.preventDefault();

  var newName = event.target.name.value;
  var newMinCustomers =event.target.minCust.value;
  var newMaxCustomers =event.target.maxCust.value;
  var newAvgCookiesPerCustomer =event.target.avgCookie.value;

  new Outlet(newName, newMinCustomers, newMaxCustomers, newAvgCookiesPerCustomer );
  Outlet.list[Outlet.list.length-1].render();
}

renderHours();

