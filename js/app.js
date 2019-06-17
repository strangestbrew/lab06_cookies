"use strict";
 
//global array of the hours 
var times = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];

//ident DOM elements
    //thead for hours
    var salesDataHeader = document.getElementById("table-header")[0];
    
    //tbody for locations/data
    var salesDataHeader = document.getElementById("table-body")[0];
    
    //tfood for running totals
    var salesDataHeader = document.getElementById("table-foot")[0];
    
    
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
}
        
Location.prototype.cookieData = function () {
    for (var i = 0; i < times.length; i++ ){
        var generator = this.randomNumber();
        var cookieData = Math.floor(generator * this.avgCookie);
        console.log(generator); 
        this.cookieArray.push(cookieData);
    }
}


//create instances of stores for constructor 
    new Location("Pike Place", 23, 65, 6.5);
    new Location("SeaTac Airport", 3, 24, 1.2);
    new Location("Seattle Center", 11, 38, 3.7);
    new Location("Capitol Hill", 20, 38, 2.3);
    new Location("Alki Beach", 2, 16, 4.6);

    console.log(Location.list); 
    
    Location.list[0].cookieData();
    console.log(Location.list[0].cookieArray);




//new code that needs to be messed with this line and below
Location.prototype.render = function () {
    //add tr to the tbody        }
    var tr = addElement(thead, 'tr', '--');
    addElement('td', this.locationName, tr);

    for(var i = 0; i < this.cookieArray[i]; i++){
    var td = addElement('td', '', tr);
    var input = addElement('input', ''< td);
    input.value = this.cookieArray[i];
    input.dataset['location'] = idx;
    input.dataset['hour'] = i; 
    }
    addElement('td', this.dayTotal, tr);
}


        

//render all of the things 

//addElement('tr', 'th', '10am');
function addElement(parent, element, content) {
    var newElement = document.createElement(element);
    var textElement = document.createTextNode(content);
    newElement.appendChild(textElement);
    parent.appendChild(newElement);
    return newElement; 

}

function renderHeader(){
    //add the tr to the head
    var tr= addElement(thead, 'tr', '--');
    for(var i = 0; i < times.length; i++){
    //add th per hour
    addElement(tr, 'th', 0);
    }
    addElement(tr, 'th', 0);
}

function renderFooter(){
    clearTableFooter();
    var  tr =addElement('tr', '', tfoot);
    addElement('th', 'Hourly Totals', tr);

    var totalOfTotals = 0;
    var hourlyTotal = 0;

    for (var i = 0; i < times.length; i++) {
        hourlyTotal = 0;
        for (var j = 0; j < Locations.length; j++) {
            hourlyTotal += Locations.locations[j].cookiesArray[i];
            totalOfTotals += Locatoins.locations[j].cookieArray[i];
        }
        addElement('th', hourlyTotal, tr);
    }
    addElement ('th', totalOfTotals, tr);
}

function renderStores () {
    clearTableBody();
    for (var i = 0; i < Locations.length; i++) {
        Locations.locations[i].render(i);
    }
}

function clearTableHead () {
    thead.innerHTML = '';
}

function clearTableBody () {
    tbody.innterHTML = '';
}

function clearTableFooter () {
    tfoot.innerHTML = '';
}

function renderTable () {
    renderTableHeader ();
    renderLocations ();
    renderTableFoot ();
}

locationForm.addEventListener('submit', handleForm);
salesForm.addEventListener('change', handleChangeData);

renderTable();

function addElement(element, content, parent) {
    var newElement = document.createElement (element);
    var textElement = document.createTExtNode (content);
    newElement.appendChild(textElement);
    parent.appendhild(newElement);
    return newElement;
}

function handleChangeData (e) {
    var store = e.target.dataset['location'];
    var hour = e.target.dataset['hour'];
    var value = parseInt(e.target.value);
    Locations.location[store].cookieArray[times] = value; 
    renderTableFooter();
}

function handleForm(e) {
    e.preventDefault();
}

var loc = e.target.locName.value;
var min = parseInt(e.target.min.value);
var max = parseInt(e.target.avg.value);

var newStore = new Location(loc, min, max, avg);

locationForm.reset();

newStore.render(Location.location.length - 1); {
    
}



//  Location.render = function (){
//      var tableBody = document.getElementById('table-body');
//      var tableRow = document.createElement('tr');
//      var tableCell = document.createElement('td');

//      tableCell.textContent = '';    
//      tableRow.appendChild(tableCell);


//      for (var i = 0; i < times.length; i++){
//         tableCell = document.createElement('td');
//          tableCell.textContent = times[i];
//          tableRow.appendChild(tableCell);
//      }
//      tableBody.appendChild(tableRow);

//      tableCell = document.createElement('td');
//      tableCell.textContent = 'Total';    
//      tableRow.appendChild(tableCell);

//      tableRow = document.createElement('tr');
//      tableCell = document.createElement('td');
//      tableCell.textContent = Location.list[0].name;
//      tableRow.appendChild(tableCell);
//      tableBody.appendChild(tableRow);

//      for (var i = 0; i < times.length; i++){
//         tableCell = document.createElement('td');
//         tableCell.textContent = Location.list[0].cookieArray[i];
//         tableRow.appendChild(tableCell);
//         tableBody.appendChild(tableRow);
//     }
    
// }


Location.render();
location.createTable.render();

//eventListener 
//<fieldset/>
//form building