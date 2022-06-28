import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames } from '../../redux/actions';

const LandingPage = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch]);

    return (
        <div>
            <div>
                LANDINGPAGE
            </div>
            <div>
                <Link to='/videogames'><button>Ingresar</button></Link>
            </div>
        </div>
    );
}

export default LandingPage;