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
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    // "GameCube",
    // "Nintendo 64",
    // "Game Boy Advance",
    // "Game Boy Color",
    // "Game Boy",
    // "SNES",
    // "NES",
    // "Classic Macintosh",
    // "Apple II",
    // "Commodore / Amiga",
    // "Atari 7800",
    // "Atari 5200",
    // "Atari 2600",
    // "Atari Flashback",
    // "Atari 8-bit",
    // "Atari ST",
    // "Atari Lynx",
    // "Atari XEGS",
    // "Genesis",
    // "SEGA Saturn",
    // "SEGA CD",
    // "SEGA 32X",
    // "SEGA Master System",
    // "Dreamcast",
    // "3DO",
    // "Jaguar",
    // "Game Gear",
    // "Neo Geo",
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