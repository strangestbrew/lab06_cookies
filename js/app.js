'use strict';

//global array of the hours
var times = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var thead = document.getElementById('timeData')[0];
var tbody = document.getElementById('table-body');
var tfoot = document.getElementById('table-foot');
var locationForm = document.getElementById('add-location');
var salesForm = document.getElementById('sales-form');

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

Location.prototype.render = function(idx) {
  var tr = addElement('tr', '', tbody);
  addElement('td', this.locationName, tr);

  for (var i = 0; i < times.length; i++) {
    var td = addElement('td', '', tr);
    var input = addElement('input', '', td);
    input.value = this.cookieArray[i];
    input.dataset['location'] = idx;
    input.dataset['hour'] = i;
  }

  addElement('td', this.dayTotal, tr);
};

function random(min, max) {
  return Math.floor(Math.random()* (max-min + 1)) + min;
}

function renderTableFooter(){
  clearTableFooter();
  var tr = addElement('tr', '', tfoot);
  addElement('th', 'Hourly Totals', tr);

  var totalTotals = 0;
  var hourlyTotals = 0;

  for (var i = 0; i < times.length; i++){
    hourlyTotals = 0;
    for (var j = 0; j < Location.locations.length; j++){
      hourlyTotals +- Location.locations[j].cookieArray[i];
      totalTotals +- Location.locations[j].cookieArray[i];
    }
    addElement('th', hourlyTotals, tr);
  }
  addElement('th',totalTotals, tr);
}

function renderStores(){
  clearTableBody();
  for (var i = 0; i < Location.locations.length; i++){
    Location.locations[i].render(i);
  }
}

function clearTableHead(){
  thead.innerHTML = '';
}

function clearTableBody(){
  tbody.innerHTML = '';
}

function clearTableFooter(){
  tfoot.innerHTML = '';
}

function renderTable(){
  renderTableHeader();
  renderStores();
  renderTableFooter();
}

locationForm.addEventLitener('submit', handleForm);
salesForm.addEventListener('change', handleChangeData);

//create instances of stores for constructor
new Location('Pike Place', 23, 65, 6.5, 'Pike');
new Location('SeaTac Airport', 3, 24, 1.2, 'SeaTac');
new Location('Seattle Center', 11, 38, 3.7, 'SeattleCenter');
new Location('Capitol Hill', 20, 38, 2.3, 'CapHill');
new Location('Alki Beach', 2, 16, 4.6,'Alki');

renderTable();

function addElement(element, content, parent) {
  var newElement = document.createElement(element);
  var textElement = document.createTextNode(content);
  newElement.appendChild(textElement);
  parent.appendChild(newElement);
  return newElement;
}

function handleChangeData(e){
  var store = e.target.dataset['location'];
  var hour = e.target.dataset['hour'];
  var value = parseInt(e.target.value);
  Location.locations[store].cookieArray[hour] = value;
  renderTableFooter();
}

function handleForm(e) {
  var loc = e.target.locName.value;
  var min = parseInt(e.target.min.value);
  var max = parseInt(e.target.max.value);
  var avg = parseFloat(e.target.avg.value);

  var newLocation = new Location(loc, min, max, avg);

  locationForm.reset();
}

function renderTableHeader(){
  clearTableHead();

  var tr = addElement('tr', '', thead);
  addElement('th', '', tr);

  for (var i = 0; i <times.length; i++) {
    addElement('th', times[i], tr);
  }
  addElement('th', 'Totals', tr);
}
