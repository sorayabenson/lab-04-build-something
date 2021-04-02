const { Router } = require('express');
const Collection = require('../models/Collection');
const pool = require('../utils/pool');

module.exports = Router()
    .get('', async (req, res, next) => {
        try {
            const data = await Collection.getCollections(req.userId)
            
            res.send(data);
        } catch(err) {
            next (err)
        }
    })

    .post('', async (req, res, next) => {
        const { body, userId } = req;
        
        Collection
            .insert(body, userId)
            .then(data => res.send(data))
            .catch(next);
    })

    // .post('', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next (err)
    //     }
    // });