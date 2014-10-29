## Fetching Time Estimates from Uber

We can now pass `userLatitude` and `userLongitude` as the query parameters `start_latitude` and `start_longitude`, and `partyLatitude` and `partyLongitude` as the query parameters `end_latitude` and `end_longitude` for the [Price Estimates](https://developer.uber.com/v1/endpoints/#price-estimates?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link) endpoint.

#### Authenticating your App

The API specifies that you can use an OAuth 2.0 bearer token or `server_token` to access time estimates. In our case, we'll be using the `server_token` generated when we registered our app to authenticate. 

__Note:__ Using an OAuth 2.0 bearer token would require our users to log in with their Uber accounts, and would grant us access to the [User Activity](https://developer.uber.com/v1/endpoints/#user-activity-v1-1?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link) and [User Profile](https://developer.uber.com/v1/endpoints/#user-profile?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link) endpoints.

At the top of `uber.js`, add variables storing the Uber `client_id` and the `server_token`:

```js
// Uber API Constants
var uberClientId = "YOUR_CLIENT_ID"
    , uberServerToken = "YOUR_SERVER_TOKEN";
```

__Warning:__ Your uberClientId and uberServerToken will be visible to anyone who views the source code for your web app once it's published on the internet.

#### Hitting the API

Next: since we'll be requesting Uber data repeatedly, and since `userLatitude` and `userLongitude` will be changing as the user moves, we're going to create a separate function to call the Uber API: `getEstimatesForUserLocation(latitude,longitude)`.

We'll use jQuery's [ajax](http://api.jquery.com/jquery.ajax/) method to request time estimates from the Uber API in the background. Your Ajax request should look something like this:

```js
function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token " + uberServerToken
    },
    data: { 
        start_latitude: latitude,
        start_longitude: longitude,
        end_latitude: partyLatitude,
        end_longitude: partyLongitude
    },
    success: function(result) {
        console.log(result);
    }
  });
}
```

__Note:__ We called the `JSON.stringify` function on `result` so that we'll be able to copy and paste output into something like [JSONLint](http://jsonlint.com/) so we can review the 'prettified' JSON.

Within the `watchPosition` callback, call `getEstimatesForUserLocation(userLatitude, userLongitude)`.

> Code check: [04-fetching-time-estimates](https://github.com/Thinkful/uber-api-guide/tree/master/app/04-fetching-time-estimates)