const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/comedy
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('comedy', page, res)

})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('comedy', req.params.id, res)

})


module.exports = router