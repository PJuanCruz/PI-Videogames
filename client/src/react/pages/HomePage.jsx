import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterAndSort, getVideogames } from '../../redux/actions';
import FilterGenres from '../components/FilterGenre.jsx';
import FilterStatus from '../components/FilterStatus.jsx';
import Order from '../components/Order.jsx';
import SearchBar from '../components/SearchBar.jsx';

const HomePage = () => {

    const videogames = useSelector(state => state.data.videogames);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!videogames.length) {
            dispatch(getVideogames());
        }
    }, [dispatch]);

    const filters = useSelector(state => state.filters);
    
    useEffect(() => {
        dispatch(filterAndSort({genres: filters.genres, status: filters.status, order: filters.order}))
    }, [filters.genres, filters.status, filters.order]);

    return (
        <div>
            <div>
                HOMEPAGE
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <FilterGenres />
                <FilterStatus />
                <Order />
            </div>
        </div>
    );
}

export default HomePage;