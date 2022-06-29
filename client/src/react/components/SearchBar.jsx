import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames, setGenresFilter, setOrder, setStatusFilter } from '../../redux/actions';
import styles, { container, input, i_search, i_close } from './styles/SearchBar.module.css';
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({setLoading}) => {

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
            setLoading(true)
            dispatch(getVideogames(setLoading, search));
        } else {
            mount.current = false;
        }
    }, [search]);

    function handleClick(event) {
        setSearch('');
        dispatch(setGenresFilter('All'));
        dispatch(setStatusFilter('All'));
        dispatch(setOrder('None'));
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