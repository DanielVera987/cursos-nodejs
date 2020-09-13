'use strict'
let MovieModel = require('../models/movie-model')
let MovieController= () => {}

MovieController.getAll = (req, res, next) => {
  MovieModel.getAll((err, rows) => {
    if(err)
		{
			let locals = {
				title : 'Error al consultar la base de datos',
				description : 'Error de Sintaxis SQL',
				error : err
			}
			res.render('error', locals)
		}
		else
		{
			let locals = {
				title : 'Lista de Películas',
				data : rows
			}
			res.render('index', locals)
		}
  })
}

MovieController.getOne = (req, res, next) => {
  let movie_id = req.params.movie_id
  
  MovieModel.getOne(movie_id, (err, rows) => {
    console.log(err, '---', rows)
    if(err)
    {
      let locals = {
				title : 'Error al buscar el registro',
				description : 'Error de Sintaxis SQL',
				error : err
      }
      
			res.render('error', locals)
    }else
    {
      let locals = {
        title: 'Editar Pelicula',
        data: rows
      }

      res.render('edit-movie', locals)
    }
  })
}

MovieController.insert = (req, res, next) => {
  let movie = {
    movie_id: req.body.movie_id,
    title: req.body.title,
    release_year: req.body.release_year,
    rating: req.body.rating,
    image: req.body.image
  }

  MovieModel.insert(movie, (err) => {
    if(err)
    {
      let locals = {
				title : 'Error al agregar el registro',
				description : 'Error de Sintaxis SQL',
				error : err
			}
			res.render('error', locals)
    }
    else{
      res.redirect('/')
    }
  })
}

MovieController.update = (req, res, next) => {
  let movie = {
    movie_id: req.body.movie_id,
    title: req.body.title,
    release_year: req.body.release_year,
    rating: req.body.rating,
    image: req.body.image
  }

  MovieModel.update(movie, (err) => {
    if(err)
    {
      let locals = {
				title : 'Error al actualizar el registro',
				description : 'Error de Sintaxis SQL',
				error : err
			}
			res.render('error', locals)
    }
    else{
      res.redirect('/')
    }
  })
}

MovieController.delete = (req, res, next) => {
  let movie_id = req.params.movie_id
  
  MovieModel.delete(movie_id, (err, rows) => {
    if(err)
    {
      let locals = {
				title : 'Error al eliminar el registro',
				description : 'Error de Sintaxis SQL',
				error : err
			}
			res.render('error', locals)
    }
    else{
      res.redirect('/')
    }
  })
}

MovieController.addForm = (req, res, next) => res.render('add-movie', {title: 'Agregar pelicula'})

MovieController.error404 = () => {
  let error = new Error(),
      locals = {
        title : 'Error 404',
        description : 'Recurso No Encontrado',
        error : error
      }

  error.status = 404

  res.render('error',locals)

  next()
}

module.exports = MovieController