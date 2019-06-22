'use strict';

//global array of the hours
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
    var generator = this.randomNumber();
    var cookieData = Math.floor(this.randomNumber * this.avgCookie);
    this.cookieArray.push(cookieData);
    this.dayTotal +- cookieData;
  }
};

//create instances of stores for constructor
new Outlet('Pike Place', 23, 65, 6.5);
new Outlet('SeaTac Airport', 3, 24, 1.2);
new Outlet('Seattle Center', 11, 38, 3.7);
new Outlet('Capitol Hill', 20, 38, 2.3);
new Outlet('Alki Beach', 2, 16, 4.6);



