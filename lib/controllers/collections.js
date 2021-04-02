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
            const data = await pool.query(`
            SELECT 
                name AS collection_name, favorites.id AS favorite_id, item_id, title, images, slug, url, bitly_url, embed_url, item_username, source, source_post_url, rating, collections.user_id FROM collections
            INNER JOIN favorites
                ON collections.id = favorites.collection_id
            WHERE collections.id=$1`,
            [req.params.id]);

            res.send(data.rows)
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