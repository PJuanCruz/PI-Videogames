import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postVideogame, putVideogame } from '../../redux/actions';
import DescriptionInput from './Inputs/DescriptionInput';
import GenresInput from './Inputs/GenresInput';
import NameInput from './Inputs/NameInput';
import PlatformsInput from './Inputs/PlatformsInput';
import RatingInput from './Inputs/RatingInput';
import ReleasedInput from './Inputs/ReleasedInput';
import styles, { container, form, submit } from './styles/ControlledForm.module.css'

const ControlledPutForm = ({id}) => {

    const dispatch = useDispatch();

    const videogame = useSelector(state => state.data.videogameDetail);

    const [name, setName] = useState({ value: '', valid: null, message: '' });
    const [description, setDescription] = useState({ value: '', valid: null, message: '' });
    const [released, setReleased] = useState({ value: '', valid: null, message: '' });
    const [rating, setRating] = useState({ value: '', valid: null, message: '' });
    const [genres, setGenres] = useState({ value: [], valid: null, message: '' });
    const [platforms, setPlatforms] = useState({ value: [], valid: null, message: '' });

    function handleSubmit(event) {
        event.preventDefault();
        if (name.valid && description.valid && released.valid && rating.valid && genres.valid && platforms.valid) {
            const updateVideogame = {
                name: name.value,
                description: description.value,
                released: released.value,
                rating: rating.value,
                genresId: genres.value,
                platformsId: platforms.value 
            };
            dispatch(putVideogame(id, updateVideogame));
            alert('succes');
        }
    }

    useEffect(() => {
        setName({ value: videogame.name, valid: true, message: '' })
        setDescription({ value: videogame.description, valid: true, message: '' })
        setReleased({ value: videogame.released, valid: true, message: '' })
        setRating({ value: videogame.rating, valid: true, message: '' })
        setGenres({ value: videogame.genres.map(e => e.id), valid: true, message: '' })
        setPlatforms({ value: videogame.platforms.map(e => e.id), valid: true, message: '' })
    }, [])
    
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

export default ControlledPutForm;