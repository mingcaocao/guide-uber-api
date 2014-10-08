// Uber API Constants
var uberClientId = "YOUR_CLIENT_ID"
	, uberServerToken = "YOUR_SERVER_TOKEN";

// Create variables to store latitude and longitude
var userLatitude
	, userLongitude;

navigator.geolocation.watchPosition(function(position) {
	// Update latitude and longitude
	userLatitude = position.coords.latitude;
	userLongitude = position.coords.longitude;

    // Query Uber API if needed
	getTimeEstimateForLocation(userLatitude, userLongitude);
});

function getTimeEstimateForLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/time",
    headers: {
    	Authorization: "Token " + uberServerToken
    },
    data: { 
    	start_latitude: latitude,
    	start_longitude: longitude
    },
    success: function(result) {
        console.log(result);
    }
  });
}