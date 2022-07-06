import React from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames, setSearch } from '../../redux/actions';
import { container, input, i_search, i_close, search_text } from './styles/SearchBar.module.css';
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSelector } from 'react-redux';

const SearchBar = ({ setLoading }) => {

    const dispatch = useDispatch();

    const search = useSelector(state => state.filters.search);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const search = event.target.children.search_input.value;
        dispatch(getVideogames(setLoading, search));
        dispatch(setSearch(search));
    }

    function handleClick(event) {
        setLoading(true);
        dispatch(getVideogames(setLoading, ''));
        dispatch(setSearch(''));
    }

    return (
        <div className={container}>
            <form onSubmit={e => handleSubmit(e)}>
                <FaSearch className={i_search}/>
                <input
                    name='search_input'
                    className={input}
                    type='text'
                    autoComplete="off"
                    placeholder='Buscar...'
                />
                {
                    search !== '' && <>
                        <span className={search_text}>
                            {search.length < 10 ? search : search.substring(0, 10)+'...'}
                        </span>
                        <FaTimes className={i_close} onClick={e => handleClick(e)} />
                    </>
                }
            </form>
        </div>
    );
}

export default SearchBar;