const { Router } = require('express');
const Favorite = require('../models/Favorite');

module.exports = Router()

    .get('', async (req, res, next) => {
        Favorite
            .getUserFaves(req)
            .then(data => res.send(data))
            .catch(next);
    })

    .post('', async (req, res, next) => {
        const { body, userId } = req;
        
        Favorite
            .insert(body, userId)
            .then(data => res.send(data))
            .catch(next);
    })

    .get('/:id', async (req, res, next) => {
        Favorite
            .getById(req.params.id)
            .then(data => res.send(data))
            .catch(next);
    })

    .put('/:id', async (req, res, next) => {
        Favorite
            .updateById(req.body, req.params.id)
            .then(data => res.send(data))
            .catch(next);
    })

    .delete('/:id', async (req, res, next) => {
        Favorite
            .deleteById(req.params.id)
            .then(data => res.send(data))
            .catch(next);
    })