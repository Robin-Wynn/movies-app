const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/classic
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('classic', page, res)

})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('classic', req.params.id, res)

})


module.exports = router