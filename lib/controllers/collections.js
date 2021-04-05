const { Router } = require('express');
const Collection = require('../models/Collection');
const Favorite = require('../models/Favorite');
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
        Collection
            .update(req.body, req.params.id)
            .then(data => res.send(data))
            .catch(next);
    })

    // .delete('/:id', async (req, res, next) => {
    //     try {
    //         const data = await pool.query(`
    //         DELETE FROM collections
    //         WHERE id=$1
    //         RETURNING *`,
    //         [req.params.id]);

            // i need a function that updates all the faves with the collection id to null like the update favorite/:id endpoint
            // 1. get all faves
            // 2. search for collection_id that = req.params.id
            // 3. change to null
            // it is almost like a batch put endpoint

            // const faves = await Favorite.getUserFaves(req.userId);

            // console.log('HIIIIIIIIIIIII', faves)

            // for(let fave of faves) {
            //     fave = req.params.id;
            //     const body = null;
            //     await Favorite.updateById(body, fave)
            // }

            // static async updateById(body, id) {
            //     const data = await pool.query(`
            //         UPDATE favorites
            //         SET collection_id=$1
            //         WHERE id=$2
            //         RETURNING *`,
            //         [
            //             body.collection_id,
            //             id
            //         ])
        
            //     return data.rows[0];
            // }

    //         res.send(data.rows[0]);
    //     } catch(err) {
    //         next (err)
    //     }
    // });