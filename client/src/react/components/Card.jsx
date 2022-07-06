import React from 'react';
import { Link } from 'react-router-dom';
import imgDefault from '../../img/descarga.png';
import { card_container, image, title, genre } from './styles/Card.module.css'

const Card = ({ id, name, genres, img }) => {
    return (
        <div className={card_container}>
            <Link to={`/videogames/${id}`}>
                <div className={genre}>
                    {
                        genres?.map(e => (
                            <p key={e.id}>{e.name}</p>
                        ))
                    }
                </div>
                <img className={image} src={img || imgDefault} alt={`${name} img`}/>
                <div className={title}><p>{name}</p></div>
            </Link>
        </div>
    );
}

export default Card;