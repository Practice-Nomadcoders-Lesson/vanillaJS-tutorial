function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lng = position.coords.longitude; // 경도
  console.log("You live in", lat, lng);
}

function onGeoError() {
  alert("Cant find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
