const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/mystery
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('mystery', page, res)

})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('mystery', req.params.id, res)

})


module.exports = router