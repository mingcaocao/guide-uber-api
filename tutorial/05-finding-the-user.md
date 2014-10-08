## Finding the User's Location

We can request the user's GPS coordinates by using the [Geolocation Web API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) that's built into every modern browser.

We must access the API via JavaScript, so before we get started we have to create JavaScript file (we're calling ours `uber.js`) and link it to our HTML. 

We'll be using jQuery to communicate with the Uber API, so we'll add a script element for jQuery at the same time.

Just before the `</body>` tag, insert the following:

```html
<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/uber.js"></script>
```

__Note:__ Order matters: make sure you load jQuery before loading your custom script.

> Code check: [03-javascript-ready](https://github.com/Thinkful/uber-api-guide/tree/master/app/03-javascript-ready)

The Uber API documentation recommends requesting updated time estimates every minute; since we want to show accurate time estimates, we'll be using the Geolocation API's [watchPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation.watchPosition) function so that we can submit the latest GPS coordinates to the Uber API each time we make a request.

In `uber.js`, create variables to store the user's location data, and then update those variables with the latest values after calling the `watchPosition` function:

```js
var userLatitude
	, userLongitude;

navigator.geolocation.watchPosition(function(position) {
	// Update latitude and longitude
	userLatitude = position.coords.latitude;
	userLongitude = position.coords.longitude;
});
```

__Check Your Code:__ To make sure you're receiving reasonable location data, you can add a `console.log(position)` statement in the `function(position)` callback, and check your JavaScript Console while viewing the page in your browser.