const { Router } = require('express');
const pool = require('../utils/pool');
const { sendSms } = require('../utils/twilio');
// const SecretService = require('../services/SecretService');

module.exports = Router()
    .post('/:to', async (req, res, next) => {
        const { gif_url } = req.body;
        const { to } = req.params;
        try {
            const data = await pool.query(`
            INSERT INTO secrets (
                gif_url
            )
            VALUES ($1)
            RETURNING *`,
            [ gif_url ]);

        await sendSms(
            `+${to}`,
            gif_url);
    
            res.send(data.rows[0]);
        } catch(err) {
            next(err)
        }

        
        // SecretService
        //     .sendAndSave(to, body)
        //     .then(data => res.send(data))
        //     .catch(next);
    })