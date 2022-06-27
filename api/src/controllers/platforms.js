const { Router } = require('express');
const { Platform } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const platformsDB = await Platform.findAll();
        
        res.json(platformsDB);
    } catch (error) {
        next(error);
    }
});

module.exports = router;