const { Genre, Platform } = require('../db');
const rawgAPI = require('./rawgAPI');

const platforms = [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "macOS",
    "Linux",
    "Xbox 360",
    "PlayStation 3",
    "Wii U",
    "Wii",
    "Web"
];

class DataBase {
    constructor() {
        this.platforms = platforms;
    }

    async loadGenres() {
        try {
            const countGenresDB = await Genre.count();

            if (!countGenresDB) {
                const genres = await rawgAPI.getGenres();
                await Genre.bulkCreate(genres);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async loadPlatforms() {
        try {
            const countPlatformsDB = await Platform.count();

            if (!countPlatformsDB) {
                const platforms = this.platforms.map(e => {
                    return { name: e };
                });

                await Platform.bulkCreate(platforms);
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new DataBase(platforms);