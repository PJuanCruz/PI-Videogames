import React from 'react';
import imgDefault from '../../img/descarga.png';
import styles, { image, container, title, description, image_container, data, list, i, genres, delete_update } from './styles/CardDetail.module.css';
import { FaGamepad } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteVideogame } from '../../redux/actions';

const CardDetail = ({ videogame }) => {

    const dispatch = useDispatch();

    const history = useHistory();

    function handleClick(event) {
        dispatch(deleteVideogame(videogame.id));
        alert('Videojuego eliminado exitosamente')
        history.push(`/videogames`)
    }

    return (
        <>
            <div className={container}>
                <div>
                    <h2 className={title}>{videogame.name}</h2>
                </div>
                <div className={image_container}>
                    <img className={image} src={videogame.img || imgDefault} />
                    <div className={description}>
                        <p>
                            {
                                videogame.description
                            }
                        </p>
                        <div className={`${list} ${genres}`}>
                            {
                                videogame.genres?.map(e => (
                                    <span key={e.id}>{e.name}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={data}>
                    <p>Lanzamiento: {videogame.released}</p>
                    <p>Puntuación: {videogame.rating} / 5.00</p>
                </div>
                {/* <div className={list}>
                {
                    videogame.genres?.map(e => (
                        <span key={e.id}>{e.name}</span>
                    ))
                }
            </div> */}
                <div className={list}>
                    {
                        videogame.platforms?.map(e => (
                            <span key={e.id}><FaGamepad className={i} />{e.name}</span>
                        ))
                    }
                </div>
            </div>
            {
                !videogame.createdAt ? null : <div className={delete_update}>
                    <button onClick={e => handleClick(e)}>Eliminar</button>
                    <Link to={`/update/${videogame.id}`}><button>Actualizar</button></Link>
                </div>
            }
        </>
    );
}

export default CardDetail;