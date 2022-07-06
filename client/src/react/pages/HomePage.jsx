import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterAndSort, getVideogames, setPage } from '../../redux/actions';
import Card from '../components/Card.jsx';
import FilterGenres from '../components/FilterGenre.jsx';
import FilterStatus from '../components/FilterStatus.jsx';
import IndexPag from '../components/IndexPag';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar.jsx';
import Order from '../components/Order.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { filters_container, loader, cards_container } from './styles/HomePage.module.css';

const HomePage = () => {


    const [loading, setLoading] = useState(false);

    const videogames = useSelector(state => state.data.videogames);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!videogames.length) {
            setLoading(true);
            dispatch(getVideogames(setLoading));
        }
    }, [dispatch, videogames.length]);

    const filters = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(setPage(1));
    }, [filters.genres, filters.status]);


    useEffect(() => {
        dispatch(filterAndSort({ genres: filters.genres, status: filters.status, order: filters.order }))
    }, [filters.genres, filters.status, filters.order]);

    let showVideogames = useSelector(state => state.data.showVideogames);
    const cardsPerPage = 15;
    const page = useSelector(state => state.data.page);
    const startIndex = (page - 1) * cardsPerPage;
    const currentVideogames = showVideogames.slice(startIndex, startIndex + cardsPerPage);


    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <SearchBar setLoading={setLoading} />
            </div>
            <div className={filters_container}>
                <FilterGenres />
                <FilterStatus />
                <Order />
            </div>
            {
                loading ?
                    <div className={loader}><Loader /></div> :
                    <div>
                        <IndexPag totalPages={Math.ceil(showVideogames.length / cardsPerPage)} />
                        <div className={cards_container}>
                            {currentVideogames.map(e => (
                                <Card
                                    key={e.id}
                                    id={e.id}
                                    name={e.name}
                                    genres={e.genres}
                                    img={e.img}
                                />
                            ))
                            }
                        </div>
                    </div>
            }
        </div>
    );
}

export default HomePage;