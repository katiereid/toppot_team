function Location(input) {
  this.shopName              = input[0].value;
  this.openHours             = Number(input[1].value);
  this.peopleNumLow          = Number(input[2].value);
  this.peopleNumHigh         = Number(input[3].value);
  this.avgDonutsOrdered      = Number(input[4].value);
  this.percentEnter          = Number(input[5].value);
};

Location.prototype.dailySalesReport= function() {
  this.dailySales=0;
  for (i = 0; i < this.openHours; i++) {
    var numPeopleThisHour = (Math.floor((this.peopleNumHigh - this.peopleNumLow) * Math.random()) + (this.peopleNumLow + 1));
    var percentCalc = (this.percentEnter / 100);
    var hourlyDonutProjection = (Math.ceil(numPeopleThisHour * percentCalc * this.avgDonutsOrdered));
    this.dailySales += hourlyDonutProjection;
    outputList.innerHTML += '<li>' +  "The "  + this.shopName + " Top Pot location needs " + hourlyDonutProjection + " donuts for hour " + i + " of the day." + '</li>';  
  };
  outputList.innerHTML += '<li>' + this.shopName + " needs " + this.dailySales + " donuts per day." + '</li';
};

$(document).ready(function() {
  $("button").click(function() {
    var newLocation = new Location($('.forInput'));
    $('#outputList').append('<li>' + newLocation.dailySalesReport() + '</li>');
  });
});
         
