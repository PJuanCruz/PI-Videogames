import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames, setGenresFilter, setOrder, setStatusFilter } from '../../redux/actions';

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const mount = useRef(true);

    function handleChange(event) {
        setSearch(event.target.value);
        dispatch(setGenresFilter('All'));
        dispatch(setStatusFilter('All'));
        dispatch(setOrder('None'));
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (!mount.current) {
            dispatch(getVideogames(search));
        } else {
            mount.current = false;
        }
    }, [search]);

    return (
        <div>
            <form>
                <input
                    type='text'
                    value={search}
                    onChange={e => handleChange(e)}
                />
            </form>
        </div>
    );
}

export default SearchBar;