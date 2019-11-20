const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateGraph)

function updateView() {
    alert("You are my guest and I am therefore in your service")
}
function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  alert(numberofRides = data.count);
  console.log(numberofRides)
}
function updateGraph() {
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
}
//You are my guest and I am therefore in your service
//I am honored, but I have worked a lifetime to be free of servitude.
//Thank you for bringing peace to my valley
//good luck with the child; may it survive and bring you a handsome reward
//I have spoken
//https://hoboson02.github.io/zagster-client/