#Welcome to my concert forum site!

#Getting started
    To clone the repo on to your machine and take a look, copy it from the GitHub page and run 'git clone' then right click and the link will appear in your terminal. 
    The app uses Ruby version 2.7.4

#Dependencies
    Once you've downloaded it, navigate to the files directory and run 'bundle install' to get all the dependencies on there from the Gemfile
    The app will not run without these, ActiveRecord and Rails are essential. With gems like puma for the server and active model serializers needed as well. 

#Database highlights
    The most important aspect of this app is that in the database, you'll see that there are two different tables 'promoter' and 'goer' that inherit their attributes from the 'user' table. This is because the React frontend has two uniquely different kinds of users. Those that go to concerts and those that promote them. More detail in the React section. There is also a many-to-many relation ship between the artist and venue tables, which are joined by shows. Data from those tables are what the users interact with. 
    If you want to look at the data in console, run 'rails c' to open that up and look. 
    If you want to add more seed data, add it then run 'rails db:seed:replant' to fix it. Just bear in mind this will delete anything you've added through the website! 

#Running the App
    The entire thing is pre-configured to run with a Rails backend and a Reactjs front, so you wont need to do anything to set that up.
    However, you want to get the rails server running first, to do that simply run 'rails s' in your terminal and the server will start up.
    Next, to get the React app running, which is all located in the 'client' folder, run the command 'npm start --prefix client' to boot up the react app

#React frontend
    You'll be taken to the homepage right when the app boots up, where you can login or create a new user.
    One thing of note, this app uses react-router-dom v6, not v5 which most are used to, so there may be some features that look foreign, check the React docs if there is any confusion. 
    There will be 5 routes at the top, that take you to each info page on the site, which are unique to each aspect of the Albany concert scene
    Biggest thing to note, throughout the app you'll see conditional rendering based on whether the users type is 'Promoter' or 'Goer'
    Only concert promoters have access to the shows CRUD actions on VenuePage, and the header on top of Artists is different for each also. 
    So, if you want to be doing actions on shows, you'll have to sign in as, or create a user.

#Conclusion
    Other than that, enjoy adding to or taking in the many different concert experiences Albany has going on!
