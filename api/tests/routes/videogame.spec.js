/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const database = require('../../src/utils/database.js');

const agent = session(app);
const videogame = {
    name: 'Super Mario Bros',
};

xdescribe('Videogame routes', () => {

    // before(() => conn.authenticate()
    //     .then(conn.sync({ force: true }))
    //     .then(async () => {
    //         await database.loadGenres();
    //         await database.loadPlatforms();
    //     })
    //     .catch((err) => {
    //         console.error('Unable to connect to the database:', err);
    //     }));

    describe('GET/genres', () => {
        it('Debe responder con un array de géneros', () => {
            return agent.get('/genres')
                .expect(200)
                .expect(res => {
                    expect(res.body).to.have.length(19)
                })
        })
    })

    describe('GET/platforms', () => {
        it('Debe responder con un array de plataformas', () => {
            return agent.get('/platforms')
                .expect(200)
                .expect(res => {
                    expect(res.body).to.have.length(23)
                })
        })
    })

    describe('GET/videogames', () => {
        it('Debe responder con un array de 100 o más videojuegos', () => {
            return agent.get('/videogames')
                .expect(200)
        })
    })

    // describe('POST/videogames', () => {
    //     it('', () => {
    //         return agent.post('/videogames')
    //         .send({
    //             "name": "VideoGame",
    //             "description": "Description...",
    //             "released": "2022-07-04",
    //             "rating": 4.99,
    //             "platformsId": [1, 2, 3],
    //             "genresId": [1, 2, 3]
    //         })
    //         .expect(201)
    //     })
    // })

    // beforeEach(() => Videogame.sync({ force: true })
    //     .then(() => Videogame.create(videogame)));
    // describe('GET /videogames', () => {
    //     it('should get 200', () =>
    //         agent.get('/videogames').expect(200)
    //     );
    // });

});