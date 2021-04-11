const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


//get route for all movies in db
router.get('/', (req, res) => {
  console.log( 'in original get route for all movies' );
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

////THIS WAS MY ORIGINAL GET ROUTE FOR DETAILS, NEW ONE BELOW
//get route for getting clickec movie to gallery
// router.get('/:movieId', ( req, res )=>{
//   movieId = req.params["movieId"]
//   console.log( 'in movie details GET', movieId );
//   //need movie description from movies table and genres from genre table
//   //join statement in query
//   const queryText = 
//   `SELECT "movies".title, "movies".poster, "movies".description, "movies".id, "genres".name AS "genre"
//     FROM "movies_genres"
//     JOIN "movies" ON "movies".id = "movies_genres".movie_id
//     JOIN "genres" ON "genres".id = "movies_genres".genre_id
//     WHERE "movies".id = $1;`;
//   pool.query( queryText, [ movieId ] )
//   .then( ( results )=>{
//     res.send( results.rows );
//   })
//   .catch ( ( err )=>{
//     console.log( 'err in movieId GET', err );
//     res.sendStatus( 500 );
//   })
// })

//stretch GET route for grabbing all details in joined table
router.get('/', ( req, res )=>{
  console.log( 'in movie details GET');
  //need movie description from movies table and genres from genre table
  //join statement in query
  const queryText = 
  `SELECT "movies".title, "movies".poster, "movies".description, "movies".id, "genres".name AS "genre"
    FROM "movies_genres"
    JOIN "movies" ON "movies".id = "movies_genres".movie_id
    JOIN "genres" ON "genres".id = "movies_genres".genre_id;`;
  pool.query( queryText )
  .then( ( results )=>{
    res.send( results.rows );
  })
  .catch ( ( err )=>{
    console.log( 'err in movie details GET', err );
    res.sendStatus( 500 );
  })
})

//post route for adding movies
router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;