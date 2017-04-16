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
 6. Search for their favourite hot sauces
 7. Add bookmarks for hot sauces they want to try

### Log-In / Sign-Up
Logins and signups both occur on a static splash page/presentational component.
<img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Index.png" alt="Index View" width="400">
#### Log-In
  An API call is sent out to the database to find the user. The user is then automatically logged in. The response from the API call will return user info as well as user checkins which will be persisted in the `UserCheckinsStore` until the user logs out.

  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Login.png" alt="Login View" width="400">

#### Sign-In
  An API call is sent out to the database to create the user. The user is then automatically logged in. The response from the API call will return user info.
  
  <img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Sign%20Up.png" alt="Sign Up View" width="400">

### Create, view, update and delete hot sauces

  On the database side, the notes are stored in one table in the database, which contains columns for `id`, `user_id`, `content`, and `updated_at`.  Upon login, an API call is made to the database which joins the user table and the note table on `user_id` and filters by the current user's `id`.  These notes are held in the `NoteStore` until the user's session is destroyed.  

  Notes are rendered in two different components: the `CondensedNote` components, which show the title and first few words of the note content, and the `ExpandedNote` components, which are editable and show all note text.  The `NoteIndex` renders all of the `CondensedNote`s as subcomponents, as well as one `ExpandedNote` component, which renders based on `NoteStore.selectedNote()`. The UI of the `NoteIndex` is taken directly from Evernote for a professional, clean look:  
<img src="https://github.com/hellochitty/Hawt-Sawce/blob/master/docs/wireframes/Single_Sauce_View.png" alt="Single Sauce View" width="400">


Note editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

### Notebooks

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](wireframes/tag-search.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
