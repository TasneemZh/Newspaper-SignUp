The site is published at https://tasneemzh-newspaper.herokuapp.com/

HTML + CSS + Bootstrap + JavaScript + Node.js + API

-----------------

You can open the site through your local server on 3000 port by typing:

- the URL: "http://localhost:3000/"

**and** 

- `nodemon (app.js)` on your HyperTerminal

NOTE: Specifying *app.js* after *nodemon* is optional since it is determined to be the *main file* in *package.JSON*

-----------------

You have to replace the *API key* and *Audience key* by making an account on Mailchimp (For more details, see app.js comments)

Your changes take effect on your local server but not the site unless you deploy your git on Heroku after making an account on Heroku

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
