const { Router } = require('express');
const { default: axios } = require('axios');
const pool = require('../utils/pool');
const { formatGifs } = require('../utils/giphy');

module.exports = Router()
    .get('/trending', async (req, res) => {
        try {
            const { data } = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=bhscYlUBOI7R8gUtK0l9alwZDASkWHdw');

            const shapedData = formatGifs(data.data);
            
            res.json(shapedData);
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    });