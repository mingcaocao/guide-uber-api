## Refreshing Time Estimates

[![](http://i.imgur.com/j7RhKTE.jpg)](http://i.imgur.com/j7RhKTE.jpg)

Uber's API recommends refreshing [time estimates](https://developer.uber.com/v1/endpoints/#time-estimates) every 60 seconds.

To do so, we'll use JavaScript's built-in timer functions.

Start by adding `var timer;` _outside_ of the `watchPosition` callback. Storing the timer outside of the callback allows us to ensure that a new timer isn't created each time `watchPosition` updates latitude and longitude -- we only want to query the Uber API every 60 seconds.

Next, in the `watchPosition` callback, check for the existence of the `timer` object. If one hasn't been created yet, generate the `timer` using `setInterval`. Make sure to call `getTimeEstimateForLocation` once separately, since our `timer` won't fire for at least 60 seconds.

```js
if (typeof timer === typeof undefined) {
	timer = setInterval(function() {
		getTimeEstimateForLocation(userLatitude, userLongitude);
	}, 60000);

	// Query Uber API the first time manually
	getTimeEstimateForLocation(userLatitude, userLongitude);
}
```

> Code check: [06-refresh-estimates](https://github.com/Thinkful/uber-api-guide/tree/master/app/06-refresh-estimates)