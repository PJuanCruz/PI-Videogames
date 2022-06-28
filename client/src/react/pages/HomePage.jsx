import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';

const HomePage = () => {
    const videogames = useSelector(state => state.videogames);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!videogames.length) {
            dispatch(getVideogames());
        }
    }, [dispatch]);

    return (
        <div>
            <div>
                HOMEPAGE
            </div>
        </div>
    );
}

export default HomePage;