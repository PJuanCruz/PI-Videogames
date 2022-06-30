import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getGenres, getPlatforms, getVideogameById } from '../../redux/actions';
import NavBar from '../components/NavBar';

const DetailPage = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogameById(id));
    }, []);

    useEffect(() => {
            dispatch(getGenres());
            dispatch(getPlatforms());
    }, []);

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <p>{id}</p>
            <Link to={`/update/${id}`}><button>Editar</button></Link>
        </div>
    );
}

export default DetailPage;