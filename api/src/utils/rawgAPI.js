const axios = require('axios');
const { API_KEY } = process.env;

class RawgAPI {
    constructor() {
        this.basepath = `https://api.rawg.io/api`;
        this.apikey = API_KEY;
    }

    async getGenres() {
        try {
            let genres = [];
            let url = `${this.basepath}/genres?key=${this.apikey}`;

            while (url) {
                const { data } = await axios.get(url);
                genres = genres.concat(data.results.map(e => {
                    return { id: e.id, name: e.name }
                }));

                url = data.next;
            }

            return genres;
        } catch (error) {
            console.log(error);
        }
    }

    async getVideogameById(id) {
        try {
            const { data } = await axios.get(`${this.basepath}/games/${id}?key=${this.apikey}`);
            const videogame = {
                id: data.id,
                name: data.name,
                description: data.description_raw,
                released: data.released,
                rating: data.rating,
                platforms: data.platforms.map(e => {
                    return { id: e.platform.id, name: e.platform.name };
                }),
                genres: data.genres.map(e => {
                    return { id: e.id, name: e.name };
                }),
                img: data.background_image
            };

            return videogame;
        } catch (error) {
            console.log(error);
        }
    }

    async getVideogamesByName(name) {
        try {
            const { data } = await axios.get(`${this.basepath}/games?search=${name}&page_size=15&key=${this.apikey}`);
            const videogames = data.results.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description_raw,
                    released: e.released,
                    rating: e.rating,
                    platforms: e.platforms.map(e => {
                        return { id: e.platform.id, name: e.platform.name };
                    }),
                    genres: e.genres.map(e => {
                        return { id: e.id, name: e.name };
                    }),
                    img: e.background_image
                }
            });

            return videogames;
        } catch (error) {
            console.log(error);
        }
    }

    async get100Videogames() {
        try {
            const response = await Promise.all(
                [
                    axios.get(`${this.basepath}/games?page=1&page_size=40&key=${this.apikey}`),
                    axios.get(`${this.basepath}/games?page=2&page_size=40&key=${this.apikey}`),
                    axios.get(`${this.basepath}/games?page=3&page_size=20&key=${this.apikey}`)
                ]
            );

            let videogames = [
                ...response[0].data.results,
                ...response[1].data.results,
                ...response[2].data.results
            ];

            videogames = videogames.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description_raw,
                    released: e.released,
                    rating: e.rating,
                    platforms: e.platforms.map(e => {
                        return { id: e.platform.id, name: e.platform.name };
                    }),
                    genres: e.genres.map(e => {
                        return { id: e.id, name: e.name };
                    }),
                    img: e.background_image
                };
            });

            return videogames;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new RawgAPI();