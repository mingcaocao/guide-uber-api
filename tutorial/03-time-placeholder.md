## Add a time estimate placeholder

Next we'll add a placeholder for the time estimate. Later in the tutorial, we'll update the placeholder with results from the Uber API.

Add a `p` element inside the `<div class="button">` and assign it an `id=time`. The HTML to make your button should now look like this:

```html
<div class="button">
		<p id="time">ESTIMATING TIME</p>
</div>
```

We still have to use CSS to position the `p` in the `div`:

```css
#time {
	margin-top: 2%;
	padding-top: 12px;
	padding-right: 27px;
}
```