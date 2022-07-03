export function filterVideogames(videogames, filterGenre, filterStatus) {
    let filteredVideogames = [];
    if (filterGenre === 'All') {
        filteredVideogames = videogames;
    } else {
        filteredVideogames = videogames.filter(v => v.genres.map(e => e.name).includes(filterGenre));
    }

    if (filterStatus === 'Created') {
        filteredVideogames = filteredVideogames.filter(v => v.createdAt);
    } else if (filterStatus === 'Existing') {
        filteredVideogames = filteredVideogames.filter(v => !v.createdAt)
    }

    return filteredVideogames;
}

export function sortVideogames(videogames, sort) {
    if (sort === 'AZ') {
        videogames.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })
    } else if (sort === 'ZA') {
        videogames.sort((a, b) => {
            if (a.name < b.name) return 1
            if (a.name > b.name) return -1
            return 0
        })
    } else if (sort === 'Rating ASC') {
        videogames.sort((a, b) => {
            if (a.rating > b.rating) return 1
            if (a.rating < b.rating) return -1
            return 0
        })
    } else if (sort === 'Rating DESC') {
        videogames.sort((a, b) => {
            if (a.rating < b.rating) return 1
            if (a.rating > b.rating) return -1
            return 0
        })
    }
    // else if (sort === 'Random') {
    //     videogames.sort((a, b) => {
    //         return Math.random() - 0.5
    //     })
    // }
}