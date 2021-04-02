const { Router } = require('express');
const pool = require('../utils/pool');

module.exports = Router()

    .get('/favorites', async (req, res, next) => {
        try {

        } catch(err) {
            next(err)
        }
    })

    .post('/favorites', async (req, res, next) => {
        try {
            const data = await pool.query(`
            INSERT INTO favorites (
                item_id,
                title,
                images,
                slug,  
                url,
                bitly_url,
                embed_url,
                item_username,
                source,
                source_post_url,
                rating,
                collection,    
                user_id
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
            RETURNING *`,
            [
                req.body.item_id,
                req.body.title,
                req.body.images,
                req.body.slug,  
                req.body.url,
                req.body.bitly_url,
                req.body.embed_url,
                req.body.item_username,
                req.body.source,
                req.body.source_post_url,
                req.body.rating,
                req.body.collection,    
                req.body.user_id
            ])

            console.log('HELLO', data.rows[0])
            res.send(data.rows[0]);
        } catch(err) {
            next(err)
        }
    })

    // .get('/favorites', async (req, res, next) => {
    //     try {

    //     } catch(err) {
    //         next(err)
    //     }
    // })