# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## To dos

[x] npm install
[x] setup database
[ ] Home page
    [ ] When a movie poster is clicked, a user should be brought to the /details view for that movie.
        [x] create details component
        [x] add route and hashrouter that works for each click -- check Edan's lecture
    [ ] Have a way to get to the Add Movie Page
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
