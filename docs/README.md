# HAWT SAWCE

[HawtSawce live][heroku]

[heroku]: http://www.herokuapp.com

HawtSawce is a full-stack web app inspired by Untappd .  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

Features implemented in HawtSawce will allow users to do the following:
 1. Log-In / Sign-Up
 2. Create, view, update and delete hot sauces
 3. Check-in and review hot sauces
 4. Have a feed of all reviews
 5. Maintain and view a personal profile


### 1. Log-In / Sign-Up
Logins and signups both occur on a static splash page/presentational component.

<img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Index.png" alt="Index View" width="400">
#### Log-In
  An API call is sent out to the database to find the user. The user is then automatically logged in. The response from the API call will return user info as well as user checkins which will be persisted in the `UserCheckinsStore` until the user logs out.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Login.png" alt="Login View" width="400">

#### Sign-In
  An API call is sent out to the database to create the user. The user is then automatically logged in. The response from the API call will return user info.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Sign%20Up.png" alt="Sign Up View" width="400">

### 2. Create, view, update and delete hot sauces
  All sauces are viewed on the main page.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Main.png" alt="All Sauces" width="400">

  On the database side, the sauces are stored in one table in the database, which contains columns for `id`, `title`, `description`, `maker_id`. The `name` of the maker is then captured from the sauce_makers table.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Single_Sauce_View.png" alt="Single Sauce View" width="400">

  Adding a sauce is a separate view with a presentational form component. When a sauce is added, an API call is sent to update the backend with the sauce.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Add_Sawce.png" alt="Add Sauce View" width="400">

  Editing a sauce is the same view as adding a sauce, but with the form inputs pre-filled with values for the specific sauce. An API call is then made to the database to update the backend with the updated sauce data. There is a button here to delete the sauce, which will generate an API call to delete the sauce in the backend database.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Edit_Sawce.png" alt="Edit Sauce View" width="400">

###  3. Check-in and review hot sauces
  Check-ins/reviews can be made/edited from either the user profile or the single sauce view. Check-ins are stored in the database, which as columns for `id`, `description`, `overall_rating`, `heat_rating`, `user_id`, and `sauce_id`.

  Adding a check-in is a separate view with a presentational form component. When a check-in is added, an API call is sent to update the backend with the sauce.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Check-In.png" alt="Add Sauce View" width="400">

  Editing a check-in is the same view as adding a check-in but with the form inputs pre-filled with values fetched for the specific check-in. When a check-in is added, an API call is sent to update the backend with the check-in.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Edit_Check_In.png" alt="Edit Sauce View" width="400">

###  4. Have a feed of all reviews
  The feed is a presentational layer that shows all of the reviews that have been made recently. These are fetched from the store which is pre-filled with reviews after signup.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Feed.png" alt="Feed View" width="400">

###  5. Maintain and view a personal profile
  The user's profile has summary numbers calculated from all of their checkins, and unique hot sauce reviews. It additionally shows a feed of the user's own checkins.

  A user is able to update their profile through the edit page. Through this page, the user is able to add a description that is visible on their profile. After a user edits their profile, an API call is made to update the user information on the backend.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
