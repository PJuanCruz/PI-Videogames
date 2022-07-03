import React from 'react';
import { NavLink } from 'react-router-dom';
import styles, { container, home_icon, links, div, option, icon, title1, title2, home, span } from './styles/NavBar.module.css';
import { FaGamepad } from "react-icons/fa";
import { MdLogout, MdOutlineAdd, MdOutlineRefresh } from "react-icons/md";

const NavBar = () => {
    return (
        <>
            <div className={container}>
                <ul>
                    <li className={home}>
                        <NavLink to='/videogames'>
                            <FaGamepad className={home_icon} /><span className={title1}>Video</span><span className={title2}>games</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className={links}>
                    <li className={option}>
                        <NavLink to='/create'>
                            <MdOutlineAdd className={icon}/><span className={span}>Añadir videojuego</span>
                        </NavLink>
                    </li>
                    <li className={option}>
                        <NavLink to='/'>
                            <MdLogout className={icon} /><span className={span}>Salir</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={div}></div>
        </>
    );
}

export default NavBar;