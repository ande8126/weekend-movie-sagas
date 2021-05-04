# Movie gallery - sagas sandbox

This is a rough draft of some of my early work with sagas, coded during an assignment for Prime Digital Academy

## To dos

[x] npm install
[x] setup database
[x] Home page
    [x] When a movie poster is clicked, a user should be brought to the /details view for that movie.
        [x] create details component
        [x] add route and hashrouter that works for each click -- check Edan's lecture
    [x] Have a way to get to the Add Movie Page
[x] Details page
    [x] show all details including ALL genres for the selected movie. 
        [x] useSelector to draw down from redux
        [x] show on DOM
        [x] Reducer in index.js
        [x] Saga with axios call
        [x] Saga put
    [x] Hint - You can make a GET request for a specific movie. Remember req.params and :id?
    [x] The details page should have a Back to List button, which should bring the user to the Home/List Page
    [ ] Base functionality does not require the movie details to load correctly after refresh of the browser.
[ ] Add Movie Page
    [x] an input field (for the movie title)
    [x] an input field (for the movie poster image URL))
    [x] a textarea (for the movie description)
    [x] a dropdown (for the genres)
    [ ] Buttons
        [ ] Cancel button, which should bring the user to the Home/List Page
        [x]Save button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)
    - Base functionality does not require being able to select more than one genre for a new movie
    - Hint: Look at the /api/movie POST route -- it's been made already
    - Hint: You'll want to use the genres that are in the db for your dropdown
 
- FROM ASSIGNMENT:
- [ ] Invest some time in styling it up!
    - [ ] Research cards for your movie posters on the list page
    - [ ] Research grids for your movie posters on the Movie List page
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.
