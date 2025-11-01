const axios = require('axios')
const paginate = require('./pagination')
const movieData = require('./movieData')

const BASE_URL = 'https://api.sampleapis.com/movies'

function fetchGenreMovies(type, page, res) {

    const url = `${BASE_URL}/${type}`

    axios.get(url)
        .then(resp => {
            const data = resp.data
            const paginated = paginate(data, page, 10)

            const extras = movieData[type] || {
                description: 'No description available for this genre.',
                yrReleased: 'N/A',
                rating: 'N/A',
                avgRuntime: 'N/A',
                imdbRating: 'N/A'
            }

            res.render('genre', {
                title: `${type.charAt(0).toUpperCase() + type.slice(1)} Movies`,
                movies: paginated.data,
                pagination: paginated,
                type,
                extras,
            })

        })

        .catch(error => {
            console.error(`❌ Error fetching ${type} movies:`, error.message)
            res.render('404', { 
                message: `Sorry, no data found for ${type} movies.` 
            })
        })

}

function fetchSingleMovie(type, id, res) {

    const url = `${BASE_URL}/${type}`

    axios.get(url)
        .then(resp => {
            // Convert id to number and handle missing property gracefully
            const movie = resp.data.find(m => m.id === parseInt(id))

            const extras = movieData[type] || {
                description: 'No description available for this genre.',
                yrReleased: 'N/A',
                rating: 'N/A',
                avgRuntime: 'N/A',
                imdbRating: 'N/A'
            }

            res.render('singleMovie', {
                title: movie.title,
                movie,
                genre: type,
                extras
            })
            
        })

        .catch(error => {
            console.error(`❌ Error fetching ${type} movies:`, error.message)
            res.render('404', { 
                message: `Sorry, no data found for ${type} movies.` 
            })
        })

}

module.exports = { fetchGenreMovies, fetchSingleMovie }