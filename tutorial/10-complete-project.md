## The Complete Project

> Code check: [final-section](https://github.com/Thinkful/uber-api-guide/tree/master/app/final-section)

###### Note: To run this code check you'll need to:
- Make sure you've downloaded the code. Do this by going [here](https://github.com/Thinkful/uber-api-guide) and either cloning the repo or clicking "Download Zip".
- In your terminal, navigate to the project folder (e.g. `/Users/cameron/Downloads/uber-api-guide/app/final-section`)
- Run a simple local server. On a Mac, you can do this by running `python -m SimpleHTTPServer`. If you're on windows, try doing this by installing [Mongoose](https://code.google.com/p/mongoose/).
- In your browser, go to `http://localhost:8000/`

## Next Steps

[![](http://i.imgur.com/8rBPali.gif)](http://thinkful.com/learn/uber-api)

You're done! Your party invitation should now show time estimates to the nearest Uber, deep-link into the Uber mobile web app, and update automatically every minute.

But the fun's only beginning. If you want to make your party invitation even better:

- Add the price `estimate` that we're already getting from the [endpoint](https://developer.uber.com/v1/endpoints/#price-estimates?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link)
- If you show prices, don't forget to follow Uber's [design guidelines](https://developer.uber.com/v1/design-guidelines/?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link) and show the `surge` indicator if needed
- Improve user experience for errors that could occur during our ajax call, or when finding the user's location

Finally: don't forget to upload your party invitation to a public webserver and share it with the world. And make sure you [invite us](http://twitter.com/thinkful) to the party!

Need help with any of this tutorial? Head over to [Thinkful.com](http://thinkful.com) and select the Frontend Web Development course.