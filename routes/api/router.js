const express = require('express')
const axios = require('axios')
const router = express.Router()
const paginate = require('../../helpers/pagination')

const BASE_URL = 'https://api.sampleapis.com/movies'

// // home route
// router.get('/', (req, res)=> {
//     res.render('home', { 
//         title: 'Welcome to my Movies App',
//         movies: []
//     })
// })

// Home route with random movie data
router.get('/', async (req, res) => {

    try{
        const genres = [
            'animation', 
            'classic',
            'comedy',
            'drama',
            'horror',
            'family',
            'mystery',
            'western'
        ]

        const requests = genres.map(g => axios.get(`${BASE_URL}/${g}`))
        const responses = await Promise.all(requests)

        const randomMovies = responses.flatMap((response, index) => {
            const genreName = genres[index]
            const movies = response.data

            const selected = movies.sort(() => 0.5 - Math.random()).slice(0,3)

            return selected.map(m => ({
                ...m,
                genre: genreName
            }))
        })

        res.render('home', {
            title: '🎬 Welcome to My Movies App',
            movies: randomMovies
        })

    } catch (error) {

        console.error('Error fetching home movies:', error.message)

        res.render('home', {
            title: '🎬 Welcome to My Movies App',
            movies: []
        });

    }
})

// dynamic genre route
router.get('/genre/:type', async (req, res) => {
    const { type } = req.params 
    const page = parseInt(req.query.page) || 1

    try {
        const { data } = await axios.get(`${BASE_URL}/${type}`)

        const paginated = paginate(data, page, 10)

        res.render('genre', { 
            title: `${type.charAt(0).toLocaleUpperCase() + type.slice(1)} Movies`, 
            movies: paginated.data,
            pagination: paginated,
            type
        })

    } catch (error) {
        console.error(`Error fetching ${type} movies:`, error.message)
        res.render('404', { message: `Sorry, no data found for ${type} movies.`})
    }
})

module.exports = router