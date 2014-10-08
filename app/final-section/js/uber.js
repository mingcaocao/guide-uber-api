// Uber API Constants
// Security note: these are visible to whomever views the source code!
var uberClientId = "YOUR_CLIENT_ID" //pkFX0lnbuP961czhT6q7iELd5wJQRp9Y
	, uberServerToken = "YOUR_SERVER_TOKEN"; //QxZ3eH2NBTn0pcP51EKFS8z_t8W31DSMZjMEiQqL

// Create variables to store latitude and longitude
var userLatitude
	, userLongitude
	, partyLatitude = 40.7249739
	, partyLongitude = -73.9966888;

// Create variable to store timer
var timer;

// Great resource: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
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

		// Query Uber API the first time manually
		getTimeEstimateForLocation(userLatitude, userLongitude);
	}
});

function getTimeEstimateForLocation(latitude,longitude) {
	console.log("Requesting updated time estimate...");
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
    	console.log(JSON.stringify(result));

    	// Returns an object with an Array key
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

$("a").click(function(event){
	// Redirect to Uber API via deep-linking to the mobile web-app
	var uberURL = "https://m.uber.com/sign-up?";

	// Add parameters
	uberURL += "client_id=" + uberClientId;
	if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
	if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
	uberURL += "&" + "dropoff_latitude=" + partyLatitude;
	uberURL += "&" + "dropoff_longitude=" + partyLongitude;
	uberURL += "&" + "dropoff_nickname=" + "Thinkful";

	// Redirect to Uber
	window.location.href = uberURL;
});