const { Router } = require('express');
const { default: axios } = require('axios');
const Gif = require('../models/Gif');
const GifService = require('../services/GifService');

module.exports = Router()
    
    .get('/trending', async (req, res, next) => {
        GifService
            .loadTrending()
            .then(gifs => res.send(gifs))
            .catch(next);
    })

    .get('/categories', async (req, res, next) => {
        Gif
            .getCategories()
            .then(data => res.send(data))
            .catch(next);
    })

    .get('/:id', async (req, res, next) => {
        const { id } = req.params;
        GifService
            .loadById(id)
            .then(gif => res.send(gif))
            .catch(next);
    })

    .get('/random/:tag', async (req, res, next) => {
        const { tag } = req.params;
        GifService
            .loadRandom(tag)
            .then(gif => res.send(gif))
            .catch(next);
    })

    .get('/search/:query', async (req, res, next) => {
        const { query } = req.params;
        GifService
            .loadSearch(query)
            .then(gifs => res.send(gifs))
            .catch(next);
    })
