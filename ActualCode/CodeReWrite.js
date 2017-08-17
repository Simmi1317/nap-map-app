// Initial Creation of Variables for URL Usage
    // Run on Form Submission

function createURL(){

  // Input Form to Variables
  Address = document.getElementById('address').value;
  City = document.getElementById('city').value;
  State = document.getElementById('state').value;

  // Formatting for the URL
  cleanAddress = Address.replace(/ /g, "+");
  cleanCity = City.replace(/ /g, "+");
  cleanState = State.replace(/ /g, "+");
  geoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cleanAddress + ",+" + cleanCity + ",+" + cleanState + "&key=AIzaSyDDrtxzlbhPB9boG6CQf2IerNZUz-4gw0o"

  // Running Rest of Code After Initial Variables Are Defined
  runProgram();
}

// Fetching JSON and Parsing It
function findDes(){
  fetch(geoCode)
  .then(res => res.json())
  .then((out) => {
    desLat = Number(out.results[0].geometry.location.lat);
    desLong = Number(out.results[0].geometry.location.lng);
    })
  .catch(err => console.log(err));
}

// GeoLocating Part -- Tracking User's Movements

  //Inputs Into Actual Function
      var watchID;
      var geoLoc;

      function showLocation(position) {
        curLat = Number(position.coords.latitude);
        curLong = Number(position.coords.longitude);
         }

      function errorHandler(err) {
         if(err.code == 1) {
            alert("Error: Unfortuntely this service cannot work without location services. Please refresh the page and grant those permissions!");
         }

         else if( err.code == 2) {
            alert("Error: Your location could not be determined!");
         }
      }

  //Actual Function
  function trackLoc(){
     if(navigator.geolocation){
        // timeout at 60000 milliseconds (60 seconds)
        var options = {timeout:60000};
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
     }

     else{
        alert("Sorry, your browser does not support necessary features for this application to work.");
     }
  }

// TimeDelay and Code Test

function firstTest(){
  console.log("Your location is: " + curLat, curLong);
  console.log("You wish to be woken at: " + desLat, desLong);
}


// Dealing With Setting Up The GeoFence
  // Converting Feet Into Long/Lat

      //Finding Conversion Factor For Long Based on Lat
      function findLong(){
        latFactor = Number(250/364560);
        absLat = Math.abs(desLat); //Absolute Value of Lat - Needed for Long For Loop
        if (absLat <= 10) {
            longFactor = Number(250/362464.48);
        } else if (absLat <= 20) {
            longFactor = Number(250/351518.955);
        } else if (absLat <= 30) {
            longFactor = Number(250/329942.42);
        } else if (absLat <= 40) {
            longFactor = Number(250/298359.105);
        } else if (absLat <= 50) {
            longFactor = Number(250/257692.32);
        } else if (absLat <= 60) {
            longFactor = Number(250/209146.08);
        } else if (absLat <= 70) {
            longFactor = Number(250/154177.025);
        } else if (absLat <= 80) {
            longFactor = Number(250/94455.195);
        } else if (absLat <= 90) {
            longFactor = Number(250/31813.385);
        }
      }

      // Creating Bounds Around Des
      function createBounds(){
        North = desLat + latFactor;
        South = desLat - latFactor;
        East = desLong + longFactor;
        West = desLong - longFactor;
      }

      function secondTest(){
        console.log("latFactor: " + latFactor);
        console.log("longFactor: " + longFactor);
        console.log("North/South Bounds: " + North, South);
        console.log("East/West Bounds: " + East, West);
      }

//Making the Alarm Ring
function alarmRing(){
  var audio = new Audio('air-horn-club.mp3');
  audio.play();
}

// Actual Ringing at Destination
function pleaseRing(){
  if ((curLat<= North && curLat>= South) && (curLong>= West && curLong<= East)){
    alarmRing();
  }
}

function finalTest(){
  console.log("Final Output of All Data: ")
  console.log(curLat, curLong);
  console.log(desLat, desLong);
  console.log(latFactor);
  console.log(longFactor);
  console.log(North, South);
  console.log(East, West);
}
