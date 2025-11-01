const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/drama
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('drama', page, res)
 
})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('drama', req.params.id, res)

})


module.exports = router