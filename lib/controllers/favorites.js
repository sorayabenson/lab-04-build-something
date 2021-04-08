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
        const { id } = req.params;
        Favorite
            .getById(id)
            .then(data => res.send(data))
            .catch(next);
    })

    .put('/:id', async (req, res, next) => {
        const { body } = req;
        const { id } = req.params;
        Favorite
            .updateById(body, id)
            .then(data => res.send(data))
            .catch(next);
    })

    .delete('/:id', async (req, res, next) => {
        const { id } = req.params;
        Favorite
            .deleteById(req.params.id)
            .then(data => res.send(data))
            .catch(next);
    })