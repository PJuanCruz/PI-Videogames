import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { not_found, btn, btn_div } from './styles/NotFoundPage.module.css'

const NotFoundPage = () => {

    return (
        <>
            <NavBar />
            <div className={not_found}>
                404 Not Found
            </div>
            <div className={btn_div}>
                <Link to='/videogames'>
                    <button className={btn}>Inicio</button>
                </Link>
            </div>
        </>
    );
}

export default NotFoundPage;