"use strict";
 
var times = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];

//1st and Pike Location
var pike = {
    name: ('First and Pike'),
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    totalCookies: 0,


     generateRandom: function(min, max) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    
    cookiesPerHour: function () {
        return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie)
    },    

    render: function () { 
        var divElement = document.getElementById("store");
        var newTitle = document.createElement("h2");
        newTitle.textContent = this.name;
        divElement.appendChild(newTitle);

        var storeData = document.createElement('ul');
        divElement.appendChild(storeData);
        

      for (var i=0; i < times.length; i++ ) {
        console.log(`${times[i]}: ${this.cookiesPerHour()}`)
        var hourData = document.createElement('li');
        var cookiesSoldPerHour = this.cookiesPerHour();
        hourData.textContent = `${times[i]}: ${cookiesSoldPerHour} cookies`;
        storeData.appendChild(hourData);
        this.totalCookies += cookiesSoldPerHour;
        console.log(this.totalCookies);
    }
    
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);
       
    }
}

console.log(pike.generateRandom (pike.minCust, pike.maxCust), 'generateRandom');

console.log(pike.cookiesPerHour(), 'cookiesPerHour');

pike.render();

//SeaTac Airport Location
var seaTac = {
    name: ('SeaTac Airport'),
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    totalCookies: 0,


     generateRandom: function(min, max) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    
    cookiesPerHour: function () {
        return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie)
    },    

    render: function () { 
        var divElement = document.getElementById("store");
        var newTitle = document.createElement("h2");
        newTitle.textContent = this.name;
        divElement.appendChild(newTitle);

        var storeData = document.createElement('ul');
        divElement.appendChild(storeData);
        

      for (var i=0; i < times.length; i++ ) {
        console.log(`${times[i]}: ${this.cookiesPerHour()}`)
        var hourData = document.createElement('li');
        var cookiesSoldPerHour = this.cookiesPerHour();
        hourData.textContent = `${times[i]}: ${cookiesSoldPerHour} cookies`;
        storeData.appendChild(hourData);
        this.totalCookies += cookiesSoldPerHour;
        console.log(this.totalCookies);
    }
    
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);
       
    }
}

console.log(seaTac.generateRandom (seaTac.minCust, seaTac.maxCust), 'generateRandom');

console.log(seaTac.cookiesPerHour(), 'cookiesPerHour');

seaTac.render();

//Seattle Center Location
var seattleCenter = {
    name: ('Seattle Center'),
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    totalCookies: 0,


     generateRandom: function(min, max) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    
    cookiesPerHour: function () {
        return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie)
    },    

    render: function () { 
        var divElement = document.getElementById("store");
        var newTitle = document.createElement("h2");
        newTitle.textContent = this.name;
        divElement.appendChild(newTitle);

        var storeData = document.createElement('ul');
        divElement.appendChild(storeData);
        

      for (var i=0; i < times.length; i++ ) {
        console.log(`${times[i]}: ${this.cookiesPerHour()}`)
        var hourData = document.createElement('li');
        var cookiesSoldPerHour = this.cookiesPerHour();
        hourData.textContent = `${times[i]}: ${cookiesSoldPerHour} cookies`;
        storeData.appendChild(hourData);
        this.totalCookies += cookiesSoldPerHour;
        console.log(this.totalCookies);
    }
    
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);
       
    }
}

console.log(seattleCenter.generateRandom (seattleCenter.minCust, seattleCenter.maxCust), 'generateRandom');

console.log(seattleCenter.cookiesPerHour(), 'cookiesPerHour');

seattleCenter.render();

//Capitol Hill Location
var capHill = {
    name: ('Capitol Hill'),
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    totalCookies: 0,


     generateRandom: function(min, max) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    
    cookiesPerHour: function () {
        return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie)
    },    

    render: function () { 
        var divElement = document.getElementById("store");
        var newTitle = document.createElement("h2");
        newTitle.textContent = this.name;
        divElement.appendChild(newTitle);

        var storeData = document.createElement('ul');
        divElement.appendChild(storeData);
        

      for (var i=0; i < times.length; i++ ) {
        console.log(`${times[i]}: ${this.cookiesPerHour()}`)
        var hourData = document.createElement('li');
        var cookiesSoldPerHour = this.cookiesPerHour();
        hourData.textContent = `${times[i]}: ${cookiesSoldPerHour} cookies`;
        storeData.appendChild(hourData);
        this.totalCookies += cookiesSoldPerHour;
        console.log(this.totalCookies);
    }
    
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);
       
    }
}

console.log(capHill.generateRandom (capHill.minCust, capHill.maxCust), 'generateRandom');

console.log(capHill.cookiesPerHour(), 'cookiesPerHour');

capHill.render();

//Alki Beach Location
var alki = {
    name: ('Alki Beach'),
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    totalCookies: 0,


     generateRandom: function(min, max) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    
    cookiesPerHour: function () {
        return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie)
    },    

    render: function () { 
        var divElement = document.getElementById("store");
        var newTitle = document.createElement("h2");
        newTitle.textContent = this.name;
        divElement.appendChild(newTitle);

        var storeData = document.createElement('ul');
        divElement.appendChild(storeData);
        

      for (var i=0; i < times.length; i++ ) {
        console.log(`${times[i]}: ${this.cookiesPerHour()}`)
        var hourData = document.createElement('li');
        var cookiesSoldPerHour = this.cookiesPerHour();
        hourData.textContent = `${times[i]}: ${cookiesSoldPerHour} cookies`;
        storeData.appendChild(hourData);
        this.totalCookies += cookiesSoldPerHour;
        console.log(this.totalCookies);
    }
    
    var showTotalCookies = document.createElement('li');
    showTotalCookies.textContent = `Total: ${this.totalCookies} cookies`;
    storeData.appendChild(showTotalCookies);
       
    }
}

console.log(alki.generateRandom (alki.minCust, alki.maxCust), 'generateRandom');

console.log(alki.cookiesPerHour(), 'cookiesPerHour');

alki.render();
