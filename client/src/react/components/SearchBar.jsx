import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames, setGenresFilter, setOrder, setStatusFilter } from '../../redux/actions';
import styles, { container, input, i_search, i_close } from './styles/SearchBar.module.css';
import { FaSearch, FaTimes } from "react-icons/fa";

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

    function handleClick(event) {
        setSearch('');
    }

    return (
        <div className={container}>
            <form>
                    <FaSearch className={i_search} />
                    <input
                        className={input}
                        type='text'
                        value={search}
                        onChange={e => handleChange(e)}
                    />
                    {
                        search !== '' && <FaTimes className={i_close} onClick={e => handleClick(e)}/>
                    }
            </form>
        </div>
    );
}

export default SearchBar;