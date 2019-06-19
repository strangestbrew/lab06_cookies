'use strict';

//global array of the hours
var times = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

//constructor for location
function Location(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dayTotal = 0;
  this.cookieArray = [];
  Location.list.push(this);
}
Location.list = [];

Location.prototype.randomNumber = function () {
  return Math.floor(Math.random() * (this.maxCust -this.minCust +1)) + this.minCust;
};

Location.prototype.cookieData = function () {
  for (var i = 0; i < times.length; i++ ){
    var generator = this.randomNumber();
    var cookieData = Math.floor(this.randomNumber * this.avgCookie);
    this.cookieArray.push(generator);
    this.dayTotal.push += generator;
  }
};

var tableBody = document.getElementById('storeData');
var tableRow = document.createElement('tr');
var cell = document.createElement('td');

Location.prototype.render = function () {
  cell.textContent = this.name;
  tableRow.appendChild(cell);

  for (var i = 0; i < this.cookieArray.length; i++){
    cell = document.createElement('td');
    cell.textContent = this.cookieArray[i];
    tableRow.appendChild(cell);
  }

  cell = document.createElement('td');
  cell.textContent = this.dayTotal;
  tableRow.appendChild(cell);

  tableBody.appendChild(tableRow);
};


var renderTimes = function () {
  var tableHead = document.getElementById('timeData');
  tableRow = document.createElement('tr');

  cell = document.createElement('td');
  cell.textContent = '';
  tableRow.appendChild(cell);

  for (var i = 0; i <times.length; i++) {
    cell = document.createElement('td');
    cell.textContent = times[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = 'Totally';
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
};

//create instances of stores for constructor
new Location('Pike Place', 23, 65, 6.5);
new Location('SeaTac Airport', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki Beach', 2, 16, 4.6);

renderTimes(times);

//////////////////////////////////////////////////////////////
