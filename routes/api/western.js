const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/western
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('western', page, res)

})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('western', req.params.id, res)

})


module.exports = router