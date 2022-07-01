import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames, setGenresFilter, setOrder, setPage, setSearch, setStatusFilter } from '../../redux/actions';
import styles, { container, input, i_search, i_close, search_text } from './styles/SearchBar.module.css';
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSelector } from 'react-redux';

const SearchBar = ({ setLoading }) => {

    // const [search, setSearch] = useState('');
    // const mount = useRef(true);

    // function handleChange(event) {
    //     setSearch(event.target.value);
    //     dispatch(setGenresFilter('All'));
    //     dispatch(setStatusFilter('All'));
    //     dispatch(setOrder('None'));
    //     dispatch(setPage(1));
    // }

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!mount.current) {
    //         setLoading(true)
    //         dispatch(getVideogames(setLoading, search));
    //     } else {
    //         mount.current = false;
    //     }
    // }, [search]);

    // function handleClick(event) {
    //     setSearch('');
    // dispatch(setGenresFilter('All'));
    // dispatch(setStatusFilter('All'));
    // dispatch(setOrder('None'));
    // dispatch(setPage(1));
    // }

    const dispatch = useDispatch();

    // const [search, setSearch] = useState('');
    const search = useSelector(state => state.filters.search);

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const search = event.target.children.search_input.value;
        dispatch(getVideogames(setLoading, search));
        dispatch(setSearch(search));
        // dispatch(setGenresFilter('All'));
        // dispatch(setStatusFilter('All'));
        // dispatch(setOrder('None'));
        // dispatch(setPage(1));
    }

    function handleClick(event) {
        // setLoading(true);
        // setSearch('')
        // dispatch(getVideogames(setLoading, ''))
        // dispatch(setGenresFilter('All'));
        // dispatch(setStatusFilter('All'));
        // dispatch(setOrder('None'));
        // dispatch(setPage(1));
        setLoading(true);
        dispatch(getVideogames(setLoading, ''));
        dispatch(setSearch(''));
    }

    // function handleChange(event) {
    //     setSearch(event.target.value)
    // }

    return (
        <div className={container}>
            <form onSubmit={e => handleSubmit(e)}>
                <FaSearch className={i_search}/>
                <input
                    name='search_input'
                    className={input}
                    // value={search}
                    type='text'
                    autoComplete="off"
                // onChange={e => handleChange(e)}
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

// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getVideogames, setGenresFilter, setOrder, setSearchFilter, setStatusFilter } from '../../redux/actions';
// import styles, { container, input, i_search, i_close } from './styles/SearchBar.module.css';
// import { FaSearch, FaTimes } from "react-icons/fa";
// import { useSelector } from 'react-redux';

// const SearchBar = ({ setLoading }) => {

//     // const [search, setSearch] = useState('');
//     // const mount = useRef(true);

//     // function handleChange(event) {
//     //     setSearch(event.target.value);
//     //     dispatch(setGenresFilter('All'));
//     //     dispatch(setStatusFilter('All'));
//     //     dispatch(setOrder('None'));
//     // }

//     const dispatch = useDispatch();

//     // useEffect(() => {
//     //     if (!mount.current) {
//     //         setLoading(true)
//     //         dispatch(getVideogames(setLoading, search));
//     //     } else {
//     //         mount.current = false;
//     //     }
//     // }, [search]);

//     function handleClick(event) {
//         dispatch(getVideogames(setLoading, ''));
//         dispatch(setSearchFilter(''));
//     }

//     const search = useSelector(state => state.filters.search);

//     function handleSubmit(event) {
//         event.preventDefault();
//         const name = event.target.children.search_input.value;
//         setLoading(true);
//         dispatch(getVideogames(setLoading, name));
//         dispatch(setSearchFilter(name));
//     }

//     return (
//         <div className={container}>
//             <form onSubmit={e => handleSubmit(e)}>
//                 <FaSearch className={i_search} />
//                 <input
//                     name='search_input'
//                     className={input}
//                     type='text'
//                     // value={search}
//                     // onChange={e => handleChange(e)}
//                 />
//                 {
//                     search !== '' && <FaTimes className={i_close} onClick={e => handleClick(e)} />
//                 }
//             </form>
//         </div>
//     );
// }

// export default SearchBar;