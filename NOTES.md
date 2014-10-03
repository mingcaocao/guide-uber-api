Planning
HTML
CSS
Normalize


Get location
Get time estimates for location
Set timer

00 Intro
01 Personalize your party invite
02 Integrate call-to-action (using Uber API Design Guidelines)
03 Time estimate placeholder


03 Include JQuery and create uber.js file
04 Get user's location (for time estimates API); store party location (from Google API)
05 Sign up for Uber API, get authentication token
06 Try your token out using Curl or REST API app
07 Get time estimates given a user's location (Run a simple local server. On a Mac, you can do this by running python -m SimpleHTTPServer. If you're on windows, try doing this by installing Mongoose.)
08 Add a timer to check Uber API every 60 seconds
09 Deep-linking to the Uber API (friends or money gif)


```html
<div class="button">
		<p id="time">ESTIMATING TIME</p>
</div>
```

.button {
		background-image: url('../img/UBER_API_Button_2x_Grey_hard edge.png');
		background-size: cover;
		width: 280px;
		height: 44px;
		margin: 0 auto;
		text-align: right;
}

#time {
		margin-top: 2%;
		padding-top: 12px;
		padding-right: 27px;
}
```



