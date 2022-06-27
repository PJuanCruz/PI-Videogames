const { Router } = require('express');
const { Op } = require('sequelize');
const { Videogame, Genre, Platform } = require('../db');
const { isUUID } = require('../utils');
const rawgAPI = require('../utils/rawgAPI');

const router = Router();

router.post('/', async (req, res, next) => {
    const { name, description, released, rating, platformsId, genresId } = req.body;
    try {
        const newVideogame = await Videogame.create(
            {
                name,
                description,
                released,
                rating
            }
        );

        await newVideogame.addPlatform(platformsId);
        await newVideogame.addGenre(genresId);

        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, description, released, rating, platformsId, genresId } = req.body;
    try {
        const videogame = await Videogame.findByPk(id);
        videogame.set(
            {
                name,
                description,
                released,
                rating
            }
        );

        await videogame.save();
        await videogame.setGenres(genresId);
        await videogame.setPlatforms(platformsId);

        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await Videogame.destroy(
            {
                where: {
                    id: id
                }
            }
        );

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        if (isUUID(id)) {
            const videogame = await Videogame.findByPk(id, {
                include: [
                    {
                        model: Genre,
                        through: {
                            attributes: []
                        }
                    },
                    {
                        model: Platform,
                        through: {
                            attributes: []
                        }
                    }
                ]
            });

            res.json(videogame);
        } else {
            const videogame = await rawgAPI.getVideogameById(id);

            res.json(videogame);
        }
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    const { name } = req.query;
    try {
        if (name) {
            const videogamesDB = await Videogame.findAll(
                {
                    include: [
                        {
                            model: Genre,
                            through: {
                                attributes: []
                            }
                        },
                        {
                            model: Platform,
                            through: {
                                attributes: []
                            }
                        }
                    ],
                    where: {
                        name: {
                            [Op.iLike]: `%${name}%`
                        }
                    }
                }
            );

            const videogamesAPI = await rawgAPI.getVideogamesByName(name);

            res.json([...videogamesDB, ...videogamesAPI].slice(0, 15));
        } else {
            const videogamesAPI = await rawgAPI.get100Videogames();

            const videogamesDB = await Videogame.findAll(
                {
                    include: [
                        {
                            model: Genre,
                            through: {
                                attributes: []
                            }
                        },
                        {
                            model: Platform,
                            through: {
                                attributes: []
                            }
                        }
                    ]
                }
            );

            res.json([...videogamesAPI, ...videogamesDB]);
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;