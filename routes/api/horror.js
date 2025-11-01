const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/horror
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('horror', page, res)

})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('horror', req.params.id, res)

})


module.exports = router