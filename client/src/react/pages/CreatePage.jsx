import React from 'react';
import ControlledForm from '../components/ControlledForm';
import NavBar from '../components/NavBar';

const CreatePage = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <ControlledForm />
            </div>
        </div>
    );
}

export default CreatePage;