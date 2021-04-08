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
    [ ] Have a way to get to the Add Movie Page
[ ] Details page
    [ ] show all details including ALL genres for the selected movie. 
    [ ] You will need to store this data in redux!
    [ ] Hint - You can make a GET request for a specific movie. Remember req.params and :id?
    [ ] The details page should have a Back to List button, which should bring the user to the Home/List Page
    [ ] Base functionality does not require the movie details to load correctly after refresh of the browser.
[ ] Add Movie Page
    [ ] an input field (for the movie title)
    [ ] an input field (for the movie poster image URL))
    [ ] a textarea (for the movie description)
    [ ] a dropdown (for the genres)
    [ ] Buttons
        [ ] Cancel button, which should bring the user to the Home/List Page
        [ ]Save button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)
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
