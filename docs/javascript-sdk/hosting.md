# Hosting your widget

After running Gulp, you’re successfully hosting your widget locally. What else do you need to do? You’ll want to host it globally for the world to access. There are some different approaches you can take here. You can host it on its own webpage or embed it into your pre-existing site. You could even embed it into your social media profile. What you do with your widget is up to you. Your preferred method for hosting will probably be to host it on your own web server. However, if you don’t have a server to host it on, here is our suggestion.

## Heroku

Heroku is a tool for hosting web apps. It takes minimal effort to set up and will let you host your widget on a global scale quickly and easily. Heroku can be used for free, but limits are in place to inhibit the use of your widget on a wider scale. Using a free account is a good way of getting your widget online on a small-scale to trial its functionality beyond a local basis. Also, priced plans are available if you want to use Heroku as a permanent hosting solution.

### Getting ready

1. Make a note of the company id (e.g. ukw3264536) and environment URL (e.g. https://uk.bookingbug.com) of the company you want to use

2. Install git: http://git-scm.com/download/win

3. Follow the SDK docs installation page to create a local angular widget: https://dev.bookingbug.com/docs/javascript-sdk/

4. Create a Heroku account: https://heroku.com/

5. Download Heroku toolkit: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

### Preparing your app

1. In your app’s folder, open gulpfile.js in a text editor and replace `port: 8000` with:

  ```
host: '0.0.0.0',
port: process.env.PORT||8000,
```

2. Using the command `cd`, navigate to your app’s root folder in the terminal

3. Input `git init` into the terminal and press enter. This initialises your app folder as a git repository

4. Input `git add -A` into the terminal and press enter. This adds app files and folder structure to the repository

5. Input `git commit -a -m first-commit` into the terminal and press enter. This commits all files with the message ‘first-commit’

### Deploying your app to Heroku

1. Login to Heroku via the terminal by inputting `heroku login` and pressing enter, then inputting your heroku credentials

2. Input `heroku create` to create your Heroku hosting address

3. Input `git push heroku master` to deploy your app to Heroku

4. Your app should have been deployed! Input `heroku open` to open your app via the hosting address

### Redeploy your app

1. If you have made any changes to your app, follow steps 2-5 of “Preparing your app”

2. Enter `heroku git:remote -a xxx-xxxx-xxxx` into the terminal, replacing the xxxs with the hosting address you were given. This can be found in: https://dashboard.heroku.com/

3. Enter `git push heroku master` in the terminal

### Changing the company

1. Navigate to your app folder

2. Open config.json in a text editor

3. Replace the company id and environment URL as required

4. Follow the Redeploy your app steps

### Other important things

- `ps:scale web=1` lets you check if your app is running

- `heroku logs --tail` lets you check the logs of your app while it is running

- `heroku destroy` will delete the host address you are currently using. If you are not using a host address, it will provide you with a way to destroy other host addresses

Once you’ve got your widget deployed to Heroku, everyone will be able to access it. Heroku is a simple and effective method for quickly hosting your widget online.
