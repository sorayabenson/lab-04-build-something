const { Router } = require('express');
const Collection = require('../models/Collection');
const pool = require('../utils/pool');

module.exports = Router()
    .post('', async (req, res, next) => {
        const { body, userId } = req;
        
        try {
            const data = await Collection.insert(body, userId);

            res.send(data);
        } catch(err) {
            next (err)
        }
    });

    // .post('', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next (err)
    //     }
    // });