$(".answerKey").attr("style","display: none;") //DO NOT REMOVE this is just to hide the empty solution and feedback div that we will add after grading
//Please enter your name for the assignment below
document.getElementById('user').innerHTML =
'Erik Hoy'

//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-1").innerHTML = weatherForecastItems.response.termsofService;


//problem-2
//console.log(weatherForecastItems.forecast.txt_forecast.forecastday)
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
// for (var key in weatherForecastItems.forecast.txt_forecast.forecastday) {
//   console.log(weatherForecastItems.forecast.txt_forecast.forecastday)
//   if (weatherForecastItems[key] === 'Saturday Night') {
//     revForecast = ;
//   } else {
//     revForecast = 'none';
//   }
// }
document.getElementById("problem-2").innerHTML = weatherForecastItems.forecast.txt_forecast.forecastday[3].reversedForecastDesc;

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function reverseIt(str) {
  var backWord = "";
  for (i=str.length-1; i>=0; i--) {
    backWord += str[i];
  }
  return backWord;
}
forecast = weatherForecastItems.forecast.txt_forecast.forecastday[3].reversedForecastDesc;
document.getElementById("problem-3").innerHTML = reverseIt(forecast);


//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function makeItRainLists(arr) {
  var content = "<ul>";
  for (i=0; i<arr.length; i++) {
    content += "<li>";
    content += weatherObservations[i].time;
    content += " ";
    content += (weatherObservations[i].precip * 100) + "%";
    content += "</li>";
  }
  content += "</ul>";
  return content;
}

document.getElementById("problem-4").innerHTML = makeItRainLists(weatherObservations);


//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
weatherArray = weatherObservations.filter(weatherObservation => weatherObservation.precip < .5)
document.getElementById("challenge-1").innerHTML = makeItRainLists(weatherArray)

//challenge-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
// document.getElementById("challenge-2").innerHTML =
