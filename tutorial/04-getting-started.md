## Getting Started with the Uber API

Now that you've registered your app with Uber, let's dig into the API's [endpoints](https://developer.uber.com/v1/endpoints/).

[![](http://i.imgur.com/LXAHh5P.png)](https://developer.uber.com/v1/endpoints/)

__Note:__ "Endpoint" is a generic term for specific web services: in this case, JSON-formatted data about Uber products that can be accessed via URLs.

The Uber API can be used to pull information about Uber users, products, price and time estimates. For our app, we plan to show our users how far away they are from pick-up by an Uber vehicle, which is included in both the [Time Estimates](https://developer.uber.com/v1/endpoints/#time-estimates) and the [Price Estimates](https://developer.uber.com/v1/endpoints/#price-estimates) endpoints.

So we have the option to add in price estimates later, let's use the [Price Estimates](https://developer.uber.com/v1/endpoints/#price-estimates) endpoint.

That endpoint requires both authorization (an OAuth 2.0 bearer token or `server_token`) and four query parameters (`start_latitude`, `start_longitude`, `end_latitude`, and `end_longitude`).

Let's start by getting our user's GPS coordinates (latitude and longitude) so that we can provide them to the Uber API.