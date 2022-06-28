import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
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