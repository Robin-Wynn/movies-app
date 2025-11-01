const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/family
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('family', page, res)

})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('family', req.params.id, res)

})


module.exports = router