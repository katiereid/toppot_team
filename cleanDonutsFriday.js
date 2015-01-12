var userShopName, userOpenHours, userPeopleNumLow, userPeopleNumHigh, userPercentEnter, userAvgDonutsOrdered;
var inputArray = []

function Location(shopName, openHours, peopleNumLow, peopleNumHigh, percentEnter, avgDonutsOrdered) {
  this.shopName              = shopName;
  //calculates total number of hours shop is open per day
  this.openHours             = openHours;
  //the smallest number of people who might pass by this shop during any given hour
  this.peopleNumLow          = peopleNumLow;
  //the largest number of people who might pass by this shop during any given hour
  this.peopleNumHigh         = peopleNumHigh;
  this.avgDonutsOrdered      = avgDonutsOrdered;
  //the percent of people passing by the shop who enter to purchase donuts
  this.percentEnter          = percentEnter;
  //possible number of people who might walk past shop in a given hour
  this.numPeopleThisHour     = function() {
    return (Math.random() * Math.floor((this.peopleNumHigh - this.peopleNumLow)) + (this.peopleNumLow + 1));
  }
  this.percentCalc           = function() {
    return (this.percentEnter / 100);
  }
  this.hourlyDonutProjection = function() {
    return (Math.ceil(this.numPeopleThisHour() * (this.percentCalc()) * this.avgDonutsOrdered));
  }
}

function submitIt() {
  inputArray = []
  userShopName         = document.getElementById('shopNameInput').value;
  userOpenHours        = document.getElementById('hoursOperatingInput').value;
  userPeopleNumLow     = document.getElementById('hourlyFootTrafficMinInput').value;
  userPeopleNumHigh    = document.getElementById('hourlyFootTrafficMaxInput').value;
  userPercentEnter     = document.getElementById('percentEnterInput').value;
  userAvgDonutsOrdered = document.getElementById('avgDonutsOrderedInput').value;

  inputArray = [userShopName, userOpenHours, userPeopleNumLow, userPeopleNumHigh, userPercentEnter, userAvgDonutsOrdered];

  userShopName         = document.getElementById('shopNameInput').value="";
  userOpenHours        = document.getElementById('hoursOperatingInput').value="";
  userPeopleNumLow     = document.getElementById('hourlyFootTrafficMinInput').value="";
  userPeopleNumHigh    = document.getElementById('hourlyFootTrafficMaxInput').value="";
  userPercentEnter     = document.getElementById('percentEnterInput').value="";
  userAvgDonutsOrdered = document.getElementById('avgDonutsOrderedInput').value="";

  var shopObject   = new Location(inputArray[0], inputArray[1], inputArray[2], inputArray[3], inputArray[4], inputArray[5]);
  var dailyTotal   = 0;
  var theHoursOpen = inputArray[1];
 
  for (i = 0; i < theHoursOpen; i++) {
    var hourlySentenceTemp = ("The " + shopObject.shopName + " Top Pot location needs " + (shopObject.hourlyDonutProjection()) + " donuts for hour " + i + " of the day.");
    var list               = document.getElementById('outputList')
    var newItemLast        = document.createElement('li');
    var newTextLast        = document.createTextNode(hourlySentenceTemp);
    newItemLast.appendChild(newTextLast);
    list.appendChild(newItemLast);
  
    dailyTotal += shopObject.hourlyDonutProjection(); 
  }
  var dailySentenceTemp = ("The daily projected total for " + shopObject.shopName + " is: " + dailyTotal + " donuts!");
  var totalOfDay        = document.getElementById('outputList');
  var newItemLastTotal  = document.createElement('li');
  var newTextLastTotal  = document.createTextNode(dailySentenceTemp);
  newItemLastTotal.appendChild(newTextLastTotal);
  list.appendChild(newItemLastTotal);
  console.log(dailyTotal);
}

var elSubmit = document.getElementById("submitButtonClick");
elSubmit.addEventListener("click", submitIt, false);
