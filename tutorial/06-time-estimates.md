## Fetching Time Estimates from Uber

We can now pass `userLatitude` and `userLongitude` as the query parameters `start_latitude` and `start_longitude` for the [Time Estimates](https://developer.uber.com/v1/endpoints/#time-estimates) endpoint.

The API specifies that you can use an OAuth 2.0 bearer token or `server_token` to access time estimates. In our case, we'll be using the `server_token` generated when we registered our app to authenticate. 

__Note:__ Using an OAuth 2.0 bearer token would require our users to log in with their Uber accounts, and would grant us access to the [User Activity](https://developer.uber.com/v1/endpoints/#user-activity-v1-1) and [User Profile](https://developer.uber.com/v1/endpoints/#user-profile) endpoints.

At the top of `uber.js`, add variables storing the Uber `client_id` and the `server_token`:

```js
// Uber API Constants
var uberClientId = "YOUR_CLIENT_ID"
	, uberServerToken = "YOUR_SERVER_TOKEN";
```

__Warning:__ Your uberClientId and uberServerToken will be visible to anyone who views the source code for your web app once it's published on the internet.

Next: since we'll be requesting Uber data repeatedly, and since `userLatitude` and `userLongitude` will be changing as the user moves, we're going to create a separate function to call the Uber API: `getTimeEstimateForLocation(latitude,longitude)`.

We'll use jQuery's [ajax](http://api.jquery.com/jquery.ajax/) method to request time estimates from the Uber API in the background. Your Ajax request should look something like this:

```js
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
			console.log(JSON.stringify(result));
    }
  });
}
```

__Note:__ We called the `JSON.stringify` function on `result` so that we'll be able to copy and paste output into something like [JSONLint](http://jsonlint.com/) so we can review the 'prettified' JSON.

Within the `watchPosition` callback, call `getTimeEstimateForLocation(userLatitude, userLongitude)`.

Now, take a look at `result` in the console. You should see something like:

```json
{
  "times": [
    {
      "localized_display_name": "uberX",
      "estimate": 274,
      "display_name": "uberX",
      "product_id": "b8e5c464-5de2-4539-a35a-986d6e58f186"
    },
    {
      "localized_display_name": "uberXL",
      "estimate": 776,
      "display_name": "uberXL",
      "product_id": "1e0ce2df-4a1e-4333-86dd-dc0c67aaabe1"
    }
  ]
}
```

__Pro Tip:__ If you see a `401` error (`No 'Access-Control-Allow-Origin' header is present on the requested resource.`) in the console, make sure you've added an `Origin URI` to your app on your Uber [Manage Apps](https://login.uber.com/applications) dashboard. You might need to generate a new `server_token` once you update the `Origin URI`.

Examining the response from the Uber API, we can see that there's a `times` key which we can use to extract an array of Uber products: `var times = result["times"];`

Our app could show the different Uber products and their time estimates, but our app only needs one time estimate to update `p id=time`.

We'll need to `sort` the `times` array from shortest to longest, extract the shortest time estimate, and use jQuery to update `p id=time` with the number of minutes to pickup:

```
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
```

> Code check: [04-time-estimates](https://github.com/Thinkful/uber-api-guide/tree/master/app/04-time-estimates)
