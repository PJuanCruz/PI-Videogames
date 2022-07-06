import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames, setData, setSearch } from '../../redux/actions';
import { container, title, btn, btn_container } from './styles/LandingPage.module.css'

const LandingPage = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearch(''))
        dispatch(setData());
        dispatch(getVideogames());
    }, [dispatch]);

    return (
        <div className={container}>
            <div className={title}>
                VideogamesApp
            </div>
            <div className={btn_container}>
                <Link to='/videogames'><button className={btn}>Ingresar</button></Link>
            </div>
        </div>
    );
}

export default LandingPage;