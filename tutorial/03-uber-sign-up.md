## Sign Up for the Uber API

Now that our static invitation has been completed, it's time to sign up for access to the Uber API at [developer.uber.com](https://developer.uber.com/?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link).

On [developer.uber.com](https://developer.uber.com/?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link), choose "Manage Apps". You'll need to [log in](https://login.uber.com/login?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link) with your existing Uber rider account, or create a new account.

#### Registering your App

Now you're ready to create your first Uber app. Choose [Register App](https://login.uber.com/applications/new?utm_source=thinkful&utm_campaign=party-invite-guide&utm_medium=link) and enter your app's details.

You'll need to provide:

- the name for your app (e.g. "Thinkful Party Invitation")
- a description ("An Uber-powered party invitation to a party at Thinkful HQ in NYC!")

As an extra security measure, Uber whitelists the domains that are allowed to access their servers. To develop on your local computer, you'll also need to set the "Origin URI" in the "Authentication" section of the page to `http://localhost`.

__Pro Tip:__ Your "Origin URI" should not contain a trailing slash. That is, `http://localhost` works, while `http://localhost/` might not.

Before clicking save, you'll also need to indicate whether you'd like to enroll in the Uber API Affiliate Program and whether you agree to the Uber API Terms of Use.

__Note:__ Do not select either of the authorization scopes: Uber users' personal data isn't needed for this tutorial. If you do need Uber users' personal data for a later project, you'll need to provide a redirect URL and privacy policy URL before proceeding.

After saving your app, you'll see a client ID, server token, and secret. 

We'll come back to these and how to use them as we dig into the API.