const { Router } = require('express');
const { Genre } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const genresDB = await Genre.findAll();
        
        res.json(genresDB);
    } catch (error) {
        next(error);
    }
});

module.exports = router;