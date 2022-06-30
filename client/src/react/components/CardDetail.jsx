import React from 'react';
import imgDefault from '../../img/descarga.png';
import styles, { image, container, title, description, image_container, data } from './styles/CardDetail.module.css';

const CardDetail = ({ videogame }) => {

    return (
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
                </div>

            </div>
            <div className={data}>
                <p>Lanzamiento: {videogame.released}</p>
                <p>Puntuación: {videogame.rating} / 5.00</p>
            </div>
            <div>
                {
                    videogame.genres?.map(e => (
                        <span key={e.id}>{e.name}</span>
                    ))
                }
            </div>
            <div>
                {
                    videogame.platforms?.map(e => (
                        <span key={e.id}>{e.name}</span>
                    ))
                }
            </div>
        </div>
    );
}

export default CardDetail;