import React from 'react';
import { useParams } from 'react-router-dom';
import ControlledPutForm from '../components/ControlledPutForm';
import NavBar from '../components/NavBar';

const UpdatePage = () => {

    const { id } = useParams();

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <ControlledPutForm id={id} />
            </div>
        </div>
    );
}

export default UpdatePage;