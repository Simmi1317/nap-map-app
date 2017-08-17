// Using User Input to Create Variables

    // var Distance;
    // var cleanDis;
    //
    // function createVariables() {
    //
    //   //Inputs
    //   Address = document.getElementById("address").value;
    //   City = document.getElementById("city").value;
    //   State = document.getElementById("state").value;
    //   Distance = document.getElementById("distance").value;
    //
    //   //GeoCodes
    //   cleanAddress = Address.replace(/ /g, "+");
    //   cleanCity = City.replace(/ /g, "+");
    //   cleanState = State.replace(/ /g, "+");
    //   cleanDis = Number(Distance);
    //   geoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cleanAddress + ",+" + cleanCity + ",+" + cleanState + "&key=AIzaSyDDrtxzlbhPB9boG6CQf2IerNZUz-4gw0o"
    // }
    //
    // // GeoCoding Part -- Converting Addresses Into Lat/Long
    // var desLat;
    // var desLong;
    //
    // function convertAddress(){
    //   fetch(geoCode)
    //   .then(res => res.json())
    //   .then((out) => {
    //     desLat = out.results[0].geometry.location.lat
    //     desLong = out.results[0].geometry.location.lng
    //     console.log(geoCode);
    //     console.log(desLat, desLong, cleanDis);
    //     })
    //   .catch(err => console.error(err));
    // }

    //Conversion Factors
    //
    // var convFactor;
    // var convLat;
    // var convLong;
    //
    // function findLong(){
    //   //absLat = Math.abs(desLat);
    //   if (desLat <= 10) {
    //         convFactor = 362464.48;
    //     } else if (desLat <= 20) {
    //         convFactor = 351518.955;
    //     } else if (desLat <= 30) {
    //         convFactor = 329942.42;
    //     } else if (desLat <= 40) {
    //         convFactor = 298359.105;
    //     } else if (desLat <= 50) {
    //         convFactor = 257692.32;
    //     } else if (desLat <= 60) {
    //         convFactor = 209146.08;
    //     } else if (desLat <= 70) {
    //         convFactor = 154177.025;
    //     } else if (desLat <= 80) {
    //         convFactor = 94455.195;
    //     } else if (desLat <= 90) {
    //         convFactor = 31813.385;
    //     }
    //   //console.log(convFactor);
    // }
    //
    // var latFactor = 1/364560;
    // var longFactor = 1/convFactor;
    //
    // var convLat = (latFactor * cleanDis);
    // var convLong = (longFactor * cleanDis);



    // GeoLocating Part -- Tracking User's Movements

    //   //Inputs Into Actual Function
    // var watchID;
    // var geoLoc;
    // var curLat;
    // var curLong;
    //
    //
    // function showLocation(position) {
    //    var curLat = position.coords.latitude;
    //    var curLong = position.coords.longitude;
    //    console.log("Current Location: Latitude : " + curLat + " Longitude: " + curLong);
    // }
    //
    // function errorHandler(err) {
    //    if(err.code == 1) {
    //       alert("Error: Unfortuntely this service cannot work without location services. Please refresh the page and grant those permissions!");
    //    }
    //
    //    else if( err.code == 2) {
    //       alert("Error: Your location could not be determined!");
    //    }
    // }
    //
    //   //Actual Function
    // function trackLoc(){
    //    if(navigator.geolocation){
    //       // timeout at 60000 milliseconds (60 seconds)
    //       var options = {timeout:60000};
    //       geoLoc = navigator.geolocation;
    //       watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    //    }
    //
    //    else{
    //       alert("Sorry, your browser does not support necessary features for this application to work.");
    //    }
    // }

  //   //GeoTrack
  // var North = desLat + convLat
  // var South = desLat - convLat
  // var East = desLong + convLong
  // var West = desLong - convLong


    // Alarm Part -- Making Alarm Ring When Location Reached

//       //Making the Alarm Ring
// function alarmRing(){
//   var audio = new Audio('air-horn-club.mp3');
//   audio.play();
// }

      //Making Alarm Ring at Location

    function pleaseRing(){
      if ((curLat<= North || curLat>= South) && (curLong<= West || curLong<= East)){
        alarmRing();
      }

    function Test(){
      console.log(cleanDis);
      console.log(desLat, desLong);
      console.log(convFactor);
      console.log(latFactor, longFactor);
      console.log(convLat, convLong);
      console.log(North, South, East, West);
      console.log(curLat, curLong);
    }


}
