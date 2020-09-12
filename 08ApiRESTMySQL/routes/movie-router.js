'use strict'

var MovieController = require('../controllers/movie-controller'),
    express = require('express'),
    router = express.Router()

router
    .get('/', MovieController.getAll)
    .get('/agregar', MovieController.addForm)
    .post('/', MovieController.insert)
    .get('/editar/:movie_id', (req, res, next) => {
      let movie_id = req.params.movie_id
      console.log(movie_id)

      req.getConnection((err, movies) => {
        movies.query('SELECT * FROM movie WHERE movie_id=?', movie_id, (err, rows) => {
          console.log(err, '---', rows)
          if(err)
          {
            throw(err)
          }else
          {
            let locals = {
              title: 'Editar Pelicula',
              data: rows
            }

            res.render('edit-movie', locals)
          }
            
        })
      })
    })
    .post('/actualizar/:movie_id', (req, res, next) => {
      req.getConnection((err, movies) => {

        let movie = {
          movie_id: req.body.movie_id,
          title: req.body.title,
          release_year: req.body.release_year,
          rating: req.body.rating,
          image: req.body.image
        }

        console.log(movie)

        movies.query('UPDATE movie SET ? WHERE movie_id = ?', [movie, movie.movie_id], (err, rows) => {
          return (err) ? res.redirect('/editar/:movie_id') : res.redirect('/') 
        })
      })
    })
    .post('/eliminar/:movie_id', (req, res, next) => {
      let movie_id = req.params.movie_id
      console.log(movie_id)

      req.getConnection((err, movies) => {
        movies.query('DELETE FROM movie WHERE movie_id=?', movie_id, (err, rows) => {
          console.log(err, '---', rows)
          return (err) ? next(new Error('Registro no encontrado')) : res.redirect('/')
            
        })
      })
    })
    .use(MovieController.error404)

module.exports = router