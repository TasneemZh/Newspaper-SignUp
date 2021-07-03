The site is published at https://tasneemzh-newspaper.herokuapp.com/

HTML + CSS + Bootstrap + JavaScript + Node.js + Express + API

-----------------

You can open the site through your local server on 3000 port by typing:

- the URL: http://localhost:3000/

**and**

- `nodemon (app.js)` on your HyperTerminal

NOTE: Specifying *app.js* after *nodemon* is optional since it is determined to be the main file in *package.JSON*

-----------------

You have to replace the *API key* and *Audience key* if you want to get into the database details, but first, you should have an account on Mailchimp (For more details, see app.js comments)

Your changes take effect on your local server but not the site unless you:

1) deploy your project on Heroku after making an account on it

2) push your project to Heroku each time you make changes on it

NOTE: It takes some time for heroku to take effect after deploying and git-pushing

-----------------

Make sure to:

1- create a site on Heroku to deploy your project on it by typing: `heroku create [your-site-name]`

2- update your local repository on Git (type on HyperTerminal: `git add .` THEN `git commit -m "[your message]"`)

3- push your local repository to the remote repository of your Heroku (type on HyperTerminal: `git push heroku [master]`)

NOTE: The branch could be any other name than *master*, type your local branch name if that is the case

-----------------

For more details, see:

[Getting started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

**and**

[Mailchimp: Quick start](https://mailchimp.com/developer/marketing/guides/quick-start/)

-----------------

I also heard there are awesome and useful notes at [.gitignore](https://github.com/TasneemZh/Newspaper-SignUp/blob/main/.gitignore), so what are you waiting for? Go and take a quick look





Welcome to the Pokédex app!

-----------------

## About the app

The app contains all the Pokemon out there with their details and images. The Pokemon current count when this app has been developed is 809. It also has many features, such as:

Whenever you refresh the page, eight random Pokemon will appear in a pretty template with their basic details about each one of them.

On the Pokemon image click, a pop-up will appear containing all that Pokemon details including its stats and moves.

A search box in the navigation bar to search for any Pokemon by its name. If it was misspelled or not found, the app will show a message indicating that.

Any Pokemon that was found by the user can be checked in order to distinguish that Pokemon from the other Pokemon in the app. The checked Pokemon are saved in a local database inside the app. That means that they won’t be lost when the page gets refreshed.

-----------------

## How to run the app

The app can be opened in two ways, either locally or hosted on the Internet by Heroku.

#### Locally on your computer

To run it locally, do the following steps:

1- Clone the project and use the `cd` command to reside on the ‘app’ folder.

2- Run on your command line `npm i` to download all the packages needed by the app. Make sure you have `node js` first installed on you computer.

3- Type on the terminal the command ‘node app.js’ to run the app on the server, or simple type `nodemon` since it is one of the app dependences I added.

4- Write the url: **localhost:3000** to see and interact with the app.

#### Hosted on the Internet

To run the app on the Internet, click on the following link:

[Pokedex App on Heroku](https://pokedex-tasneem.herokuapp.com/)

-----------------

#### Notes

Some notes to take into consideration when using the app:

The loading page take 3 seconds, and the searching process takes five. Hopefully that won’t be too long since the precision in this app has been a very important factor to take care about.

-----------------

_Developed by:_ Tasneem Zahdeh
