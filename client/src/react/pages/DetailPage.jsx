import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const DetailPage = () => {

    const { id } = useParams();

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <p>{id}</p>
        </div>
    );
}

export default DetailPage;