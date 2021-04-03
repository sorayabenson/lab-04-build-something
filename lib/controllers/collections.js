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
        Collection
            .getCollectionById(req.params.id)
            .then(data => res.send(data))
            .catch(next);
    })

    .put('/:id', async (req, res, next) => {
        try {
            const data = await pool.query(`
            UPDATE collections
            SET name=$1
            WHERE id=$2
            RETURNING *`,
            [
                req.body.name,
                req.params.id
            ])
            
            res.send(data.rows[0])
        } catch(err) {
            next (err)
        }
    })

    // .post('', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next (err)
    //     }
    // });