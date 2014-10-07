// Uber API Constants
var uberClientId = "YOUR_CLIENT_ID"
	, uberServerToken = "YOUR_SERVER_TOKEN";

// Create variables to store latitude and longitude
var userLatitude
	, userLongitude;

// Create variable to store timer
var timer;

navigator.geolocation.watchPosition(function(position) {
	// Update latitude and longitude
	userLatitude = position.coords.latitude;
	userLongitude = position.coords.longitude;

  // Create timer if needed
  // Once initialized, it will fire every 60 seconds as recommended by the Uber API
  // We only create the timer after we've gotten the user's location for the first time 
  if (typeof timer === typeof undefined) {
    timer = setInterval(function() {
        getTimeEstimateForLocation(userLatitude, userLongitude);
    }, 60000);

    // Query Uber API if needed
    getTimeEstimateForLocation(userLatitude, userLongitude);
  }
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
    	var times = result["times"]; 
    	if (typeof times != typeof undefined) {
    		// Sort Uber products by time to the user's location 
    		times.sort(function(t0, t1) {
    			return t0.estimate - t1.estimate;
    		});

    		// Update the Uber button with the shortest time
    		var shortestTime = times[0];
    		if (typeof shortestTime != typeof undefined) {
    			console.log("Updating time estimate...");
					$("#time").html("IN " + Math.ceil(shortestTime.estimate / 60.0) + " MIN");
    		}
    	}
    }
  });
}