const { Router } = require('express');
const { default: axios } = require('axios');
const pool = require('../utils/pool');
const Gif = require('../models/Gif');
const GifService = require('../services/GifService');
const { formatGifs, shapeOneGif } = require('../utils/giphy');
const { get } = require('../app');
const { getRandom } = require('../models/Gif');

module.exports = Router()
    .get('/trending', async (req, res, next) => {
        GifService
            .loadTrending()
            .then(gifs => res.send(gifs))
            .catch(next);
        
            // try {
            //     const gifs = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=bhscYlUBOI7R8gUtK0l9alwZDASkWHdw');
    
            //     const shapedData = formatGifs(data.data);
                
            //     res.json(shapedData);
            // } catch(e) {
            //     res.status(500).json({ error: e.message })
            // }


            // try {
            //     const gifs = await Gif.getTrending(req)
                
            //     res.json(gifs);
            // } catch(e) {
            //     res.status(500).json({ error: e.message })
            // }


            // try {
            //     const gifs = await GifService.loadTrending(req)
                
            //     res.json(gifs);
            // } catch(err) {
            //     next(err)
            // }
    })

    .get('/:id', async (req, res, next) => {
        GifService
            .loadById(req.params.id)
            .then(gif => res.send(gif))
            .catch(next);
    })

    .get('/random/:tag', async (req, res, next) => {
        GifService
            .loadRandom(req.params.query)
            .then(gif => res.send(gif))
            .catch(next);
    })