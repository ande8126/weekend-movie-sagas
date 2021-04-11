const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//get route for genres
router.get('/:movieId', ( req, res )=>{
  movieId = req.params["movieId"]
  console.log( 'in movie details GET', movieId );
  //need movie description from movies table and genres from genre table
  //join statement in query
  const queryText = 
  `SELECT "genres".name
    FROM "movies_genres"
    JOIN "movies" ON "movies".id = "movies_genres".movie_id
    JOIN "genres" ON "genres".id = "movies_genres".genre_id
    WHERE "movies".id = $1;`;
  pool.query( queryText, [ movieId ] )
  .then( ( results )=>{
    res.send( results.rows );
  })
  .catch ( ( err )=>{
    console.log( 'err in movieId GET', err );
    res.sendStatus( 500 );
  })
})

module.exports = router;