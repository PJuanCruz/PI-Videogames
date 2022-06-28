import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getGenres, setGenresFilter } from '../../redux/actions';

const FilterGenres = () => {

    const dispatch = useDispatch();

    const genres = useSelector(state => state.selects.genres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
    }, []);

    function handleChange(event) {
        dispatch(setGenresFilter(event.target.value));
    }

    const currentGenres = useSelector(state => state.filters.genres);

    return (
        <div>
            <select value={currentGenres} onChange={e => handleChange(e)}>
                <option value={'All'}>All</option>
                {
                    genres.map(e => (
                        <option key={e.id} value={e.name}>{e.name}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default FilterGenres;