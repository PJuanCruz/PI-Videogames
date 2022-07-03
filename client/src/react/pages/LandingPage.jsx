import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames } from '../../redux/actions';
import style, { container, title, btn, btn_container } from './styles/LandingPage.module.css'

const LandingPage = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
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