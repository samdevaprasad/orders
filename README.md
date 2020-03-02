To get started open up two seperate command prompts. I use Cmder since it's straight forward to use and I can specific the PATH and other variables pretty easily on start up in the user-startup.cmd file.

In the first command prompt run:

- cd services
- npm i
- node app.js

In the second command prompt run:

- cd ui
- npm i
- npm start

The UI should be viewable at http://localhost:3000/  (In case you are not able to bring up demo, I also have a video demo uploaded to this repo for your viewing)



Please see below a list of future enhancements I would have made if I had more time.

Technical Enhancements
- make this a @micrsoft/rush repo
- make common parent component for Users.js and Items.js since they are similar
- add npm prettier for consistent formatting
- add test cases (none currently)
- add and use typescript everywhere
- make db transactional for orders upload.  could potentially upload to orders table and fail at upload to order_items table
- host the ui on my github pages and then find some free hosting service for my service, so that you don't have to start up project locally
- add more branches than just master
- use webpack instead of create-react-app

Functional Improvements
- check with users on usability if they like all uploads/views on one screen
- ability to remove/edit an order
- use a grid component like ag-grid instead of tables (so you can have a scrollable/filterable/searchable area)
- check behavior if a user presses upload multiple times before service responds

Walmart InHome Improvements
- i wanted to add some sort of analytics (bar graphs of users orders)
- also i would have changed the db to include timestamps so that we have timeseries data (assuming people entering the orders enter it near the same time of the actual order)
- then i could have run some sort of predictive analytics on it



