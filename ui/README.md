This is the user interface module for our orders application.

I decided to keep it fairly simple in the front end as well.  A create react app was the choice.  Reading up about create react app it uses babel and webpack behind the scenes.  Nice for a short project like this not to deal with webpacks and configs.

For hitting my endpoints I decided to use createActions from redux-api-middleware.  Fit in well with the react + redux structure of the front end that I used to manage the global state. In the main read me file I mentioned some areas of enhancements I would have made if this was a production level app.

For a majority of the components I used MDBReact.  They had neat and easy to use components in their free version that I was able to leverage.  Otherwise I would have used react-bootstrap.  