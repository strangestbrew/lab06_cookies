"use strict";
 
var times = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];

function Location(name, minCust, maxCust, avgCookie) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
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

  new Location("Pike Place", 23, 65, 6.5);
  new Location("SeaTac Airport", 3, 24, 1.2);
  new Location("Seattle Center", 11, 38, 3.7);
  new Location("Capitol Hill", 20, 38, 2.3);
  new Location("Alki Beach", 2, 16, 4.6);

  console.log(Location.list); 
  
 Location.list[0].cookieData();
 console.log(Location.list[0].cookieArray);


 Location.render = function (){
     var tableBody = document.getElementById('table-body');
     var tableRow = document.createElement('tr');
     var tableCell = document.createElement('td');

     tableCell.textContent = '';    
     tableRow.appendChild(tableCell);


     for (var i = 0; i < times.length; i++){
        tableCell = document.createElement('td');
         tableCell.textContent = times[i];
         tableRow.appendChild(tableCell);
     }
     tableBody.appendChild(tableRow);

     tableCell = document.createElement('td');
     tableCell.textContent = 'Total';    
     tableRow.appendChild(tableCell);

     tableRow = document.createElement('tr');
     tableCell = document.createElement('td');
     tableCell.textContent = Location.list[0].name;
     tableRow.appendChild(tableCell);
     tableBody.appendChild(tableRow);

     for (var i = 0; i < times.length; i++){
        tableCell = document.createElement('td');
        tableCell.textContent = Location.list[0].cookieArray[i];
        tableRow.appendChild(tableCell);
        tableBody.appendChild(tableRow);
    }
    
    var createTable = function (){
        for (let i = 0; i < Locations.list.length; i++) {
            Locations.list[i].renderData();
            tableCell = document.createElement('td');
            tableCell.textContent = Location.list[i].cookieArray[i];
            tableRow.appendChild(tableCell);
            tableBody.appendChild(tableRow);
        }
    }   

}

Location.render();
location.createTable.render();
