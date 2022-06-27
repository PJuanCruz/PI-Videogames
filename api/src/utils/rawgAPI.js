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
                    return {id: e.id, name: e.name}
                }));

                url = data.next;
            }

            return genres;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new RawgAPI();