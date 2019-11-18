const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateView)

function updateView() {
    alert("You are my guest and I am therefore in your service")
}
function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}
//You are my guest and I am therefore in your service
//I am honored, but I have worked a lifetime to be free of servitude.
//Thank you for bringing peace to my valley
//good luck with the child; may it survive and bring you a handsome reward
//I have spoken
//https://hoboson02.github.io/zagster-client/