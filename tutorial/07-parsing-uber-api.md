## Parsing Uber API Results

Take a look at the `result` that should output in the console. You should see something like:

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

> Code check: [05-parsing-uber-api](https://github.com/Thinkful/uber-api-guide/tree/master/app/05-parsing-uber-api)