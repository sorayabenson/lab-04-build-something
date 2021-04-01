const { Router } = require('express');
const { default: axios } = require('axios');
const pool = require('../utils/pool');
const Gif = require('../models/Gif');
const GifService = require('../services/GifService');
const { formatGifs, shapeOneGif } = require('../utils/giphy');

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
        try {
            const gif = await GifService.loadById(req.params.id);

            res.send(gif)
        } catch(err) {
            next(err)
        }
        
        // try {
        //     const { data } = await axios.get(`https://api.giphy.com/v1/gifs/${req.params.id}?api_key=${process.env.GIPHY_API_KEY}`)

        //     const shapedData = shapeOneGif(data.data);

        //     res.send(shapedData)
        // } catch(err) {
        //     next(err)
        // }

    })