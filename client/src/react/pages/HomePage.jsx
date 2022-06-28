import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterAndSort, getVideogames } from '../../redux/actions';
import FilterGenres from '../components/FilterGenre.jsx';
import FilterStatus from '../components/FilterStatus.jsx';
import NavBar from '../components/NavBar.jsx';
import Order from '../components/Order.jsx';
import SearchBar from '../components/SearchBar.jsx';
import styles, {filters_container} from './styles/HomePage.module.css';

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
                <NavBar />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className={filters_container}>
                <FilterGenres />
                <FilterStatus />
                <Order />
            </div>
        </div>
    );
}

export default HomePage;