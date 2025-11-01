const router = require('express').Router()
const { fetchGenreMovies, fetchSingleMovie } = require('../../helpers/fetchMovies')


// http://localhost:1995/animation
router.get('/', (req, res)=> {

    const page = parseInt(req.query.page) || 1
    fetchGenreMovies('animation', page, res)
    
})



router.get('/:id', (req, res)=> {

    fetchSingleMovie('animation', req.params.id, res)

})


module.exports = router