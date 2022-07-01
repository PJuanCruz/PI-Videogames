import React from 'react';
import { NavLink } from 'react-router-dom';
import styles, { container, home_icon, links, div } from './styles/NavBar.module.css';
import { FaGamepad } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
        <div className={container}>
            <ul>
                <li>
                    <NavLink to='/videogames'>
                        <FaGamepad className={home_icon} />
                    </NavLink>
                </li>
            </ul>
            <ul className={links}>
                <li>
                    <NavLink to='/create'>
                        Crear
                    </NavLink>
                </li>
                <li>
                    Crear
                </li>
                <li>
                <NavLink to='/'>
                        Salir
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className={div}></div>
        </>
    );
}

export default NavBar;