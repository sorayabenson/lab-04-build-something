const { Router } = require('express');
const Collection = require('../models/Collection');
const pool = require('../utils/pool');

module.exports = Router()
    .get('', async (req, res, next) => {
        Collection
            .getCollections(req.userId)
            .then(data => res.send(data))
            .catch(next);
    })

    .post('', async (req, res, next) => {
        const { body, userId } = req;
        
        Collection
            .insert(body, userId)
            .then(data => res.send(data))
            .catch(next);
    })

    .get('/:id', async (req, res, next) => {
        try {
            const data = await Collection.getCollectionById(req.params.id)

            res.send(data)
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