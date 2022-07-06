import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getGenres, setGenresFilter } from '../../redux/actions';
import { container, select, i_close } from './styles/Filter.module.css';
import { FaTimes } from "react-icons/fa";

const FilterGenres = () => {

    const dispatch = useDispatch();

    const genres = useSelector(state => state.selects.genres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
    }, [dispatch]);

    function handleChange(event) {
        dispatch(setGenresFilter(event.target.value));
    }

    const currentGenres = useSelector(state => state.filters.genres);

    function handleClick(event) {
        dispatch(setGenresFilter('All'));
    }

    return (
        <div className={container}>
            <select className={select} value={currentGenres} onChange={e => handleChange(e)}>
                <option value={'All'}>All</option>
                {
                    genres.map(e => (
                        <option key={e.id} value={e.name}>{e.name}</option>
                    ))
                }
            </select>
            {
                currentGenres !== 'All' && <FaTimes className={i_close} onClick={e => handleClick(e)} />
            }
        </div>
    );
}

export default FilterGenres;