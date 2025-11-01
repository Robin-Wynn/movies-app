const router = require('express').Router()
const axios = require('axios')



router.get('/:id', (req, res) => {

    const id = req.params.id

    const url = ``

    axios.get(url)
    .then(resp => {
        // console.log(resp.data)
        // res.send('success')
        res.render('pages/singleMovie', {
            title: resp.data.title,
            name: resp.data.title,
            img: resp.data.posterURL,
            imdbLink: resp.data.imdbId,
        })
    })
})
