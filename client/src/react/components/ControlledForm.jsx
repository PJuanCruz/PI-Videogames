import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validate from '../../form-validations/name';
import { postVideogame } from '../../redux/actions';
import DescriptionInput from './Inputs/DescriptionInput';
import GenresInput from './Inputs/GenresInput';
import NameInput from './Inputs/NameInput';
import PlatformsInput from './Inputs/PlatformsInput';
import RatingInput from './Inputs/RatingInput';
import ReleasedInput from './Inputs/ReleasedInput';
import styles, { container, form, submit } from './styles/ControlledForm.module.css'

const ControlledForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState({ value: '', valid: null, message: '' });
    const [description, setDescription] = useState({ value: '', valid: null, message: '' });
    const [released, setReleased] = useState({ value: '', valid: null, message: '' });
    const [rating, setRating] = useState({ value: '', valid: null, message: '' });
    const [genres, setGenres] = useState({ value: [], valid: null, message: '' });
    const [platforms, setPlatforms] = useState({ value: [], valid: null, message: '' });

    function handleSubmit(event) {
        event.preventDefault();
        if (name.valid && description.valid && released.valid && rating.valid && genres.valid && platforms.valid) {
            const newVideogame = {
                name: name.value,
                description: description.value,
                released: released.value,
                rating: rating.value,
                genresId: genres.value,
                platformsId: platforms.value 
            };
            dispatch(postVideogame(newVideogame));
            alert('succes');
        }
    }
    
    return (
        <div className={container}>
            <form className={form} onSubmit={e => handleSubmit(e)}>
                <NameInput state={name} setState={setName} />
                <DescriptionInput state={description} setState={setDescription} />
                <ReleasedInput state={released} setState={setReleased} />
                <RatingInput state={rating} setState={setRating} />
                <GenresInput state={genres} setState={setGenres} />
                <PlatformsInput state={platforms} setState={setPlatforms} />
                <button type="submit" className={submit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ControlledForm;