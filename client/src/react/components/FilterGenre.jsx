import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getGenres } from '../../redux/actions';

const FilterGenres = () => {

    const dispatch = useDispatch();

    const genres = useSelector(state => state.selects.genres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
    }, []);

    return (
        <div>
            <select>
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