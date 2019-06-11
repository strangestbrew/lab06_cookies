"use strict";
 
var times = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];

var pike = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,

     generateRandom: function(min, max) {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    
    cookiesPerHour: function () {
        return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie)
    },    

    render: function () { 
        var divElement = document.getElementById("store");
        var newTitle = document.createElement("h2");
        divElement.appendChild(newTitle);


      for (var i=0; i < times.length; i++ ) {
        console.log(`${times[i]}: ${this.cookiesPerHour()}`)
      }
    }
}

console.log(pike.generateRandom (pike.minCust, pike.maxCust), 'generateRandom');

console.log(pike.cookiesPerHour(), 'cookiesPerHour');

console.log(pike.render());


 var seaTac = {
     minCust = 3,
     maxCust = 24,
     avgCookie = 1.2,

     generateRandom: function(min, max) {
         return Math.floor(Math.random()*(this.maxCust - this.minCust + 1)) + this.minCust;
     },

     cookiesPerHour: function () {
         return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie)
     },

     render: function () {
         for (var i=0; i <times.length; i++){
             console.log(`${times[i]}: ${this.cookiesPerHour()}`)
         }
     }

 }

 var seattleCenter = {
     //minCust = 11,
     //maxCust = 38,
     //avgCookie = 3.7


 }

 var capHill = {
     //minCust = 20,
     //maxCust = 38,
     //avgCookie = 2.3,

 }

 var Alki = {
     //minCust = 2,
     //maxCust = 16,
     //avgCookie = 4.6,


 }