const { Router } = require('express');
const { default: axios } = require('axios');
const pool = require('../utils/pool');
const Gif = require('../models/Gif');
const GifService = require('../services/GifService');

module.exports = Router()
    .get('/trending', async (req, res, next) => {
        try {
            const gifs = await GifService.loadTrending(req)
            
            res.json(gifs);
        } catch(err) {
            next(err)
        }
    });