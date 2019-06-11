Project title
Pat's Salmon Cookies E-Storefront
(lab06 Code Fellows 201 Salmon Cookies)

Motivation
Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies.

They're cookies made into the shape of a salmon, and actually made with salmon (though the fish is ground up so fine that you can't even taste it!) that is the ideal match for a steaming cup of coffee on a gray Seattle morning. Or gray Seattle afternoon... whatever. Tourists will go gaga for them, locals will begrudgingly fall in love with them, and Pat will make a ton of money.

It was my tasking as the project developer to create a cohesive brand image using Pat's (the business owner's) input, and to design a beautiful and functional web prescence to represent his product. Ultimate goals were to assist with point of sale tracking on an hourly basis, and to provide basic location information for all five of his locations. 

Build status


Code style
Code style is strict JavaScript. (standard)


Screenshots
(Include logo/demo screenshot etc.)

Code Example
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


Installation
Provide step by step series of examples and explanations about how to get a development env running.

API Reference


Tests
Describe and show how to run the tests with code examples.

How to use?


Contribute
Let people know how they can contribute into your project. A contributing guideline will be a big plus.

Credits
Erin Trainor; TA and goddess
Sam Gnuschke; coding partner and classmate
https://meyerweb.com/eric/tools/css/reset/ CSS Reset Tool


License
MIT © L. Thomas