

function doPrint() {
  Address = document.getElementById("address").value;
  City = document.getElementById("city").value;
  State = document.getElementById("state").value;

  cleanAddress = Address.replace(/ /g, "+");
  cleanCity = City.replace(/ /g, "+");
  cleanState = State.replace(/ /g, "+");
  geoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cleanAddress + ",+" + cleanCity + ",+" + cleanState + "&key=AIzaSyDDrtxzlbhPB9boG6CQf2IerNZUz-4gw0o"

  fetch(geoCode)
  .then(res => res.json())
  .then((out) => {
    desLat = out.results[0].geometry.location.lat
    desLong = out.results[0].geometry.location.lng
    console.log(desLong);
    console.log(desLat);
  })
  .catch(err => console.error(err));
}

// out.results[0].geometry.location.lat
// out.results[0].geometry.location.lng
