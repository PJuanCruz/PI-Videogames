import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { validate as validateDescription } from '../../form-validations/description';
import { validate as validateGenres } from '../../form-validations/genres';
import { validate as validateName } from '../../form-validations/name';
import { validate as validatePlatforms } from '../../form-validations/platforms';
import { validate as validateRating } from '../../form-validations/rating';
import { validate as validateReleased } from '../../form-validations/released';
import { getVideogamesDBNames, postVideogame, setSearch } from '../../redux/actions';
import DescriptionInput from './Inputs/DescriptionInput';
import GenresInput from './Inputs/GenresInput';
import NameInput from './Inputs/NameInput';
import PlatformsInput from './Inputs/PlatformsInput';
import RatingInput from './Inputs/RatingInput';
import ReleasedInput from './Inputs/ReleasedInput';
import styles, { container, form, submit, volver, icon, text } from './styles/ControlledForm.module.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useSelector } from 'react-redux';

const ControlledForm = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogamesDBNames());
    }, []);

    const names = useSelector(state => state.selects.names);
    console.log(names)

    const history = useHistory();

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
            dispatch(setSearch(''))
            alert('Videojuego creado exitosamente');
            history.push(`/videogames`)
        } else {
            validateName(name, setName, names);
            validateDescription(description, setDescription)
            validateReleased(released, setReleased)
            validateRating(rating, setRating)
            validateGenres(genres, setGenres)
            validatePlatforms(platforms, setPlatforms)
        }
    }

    return (
        <>
            <div className={volver}>
                <Link to='/videogames'>
                    <MdOutlineKeyboardBackspace className={icon} /><span className={text}>Volver</span>
                </Link>
            </div>
            <div className={container}>
                <form className={form} onSubmit={e => handleSubmit(e)}>
                    <NameInput state={name} setState={setName} />
                    <DescriptionInput state={description} setState={setDescription} />
                    <ReleasedInput state={released} setState={setReleased} />
                    <RatingInput state={rating} setState={setRating} />
                    <GenresInput state={genres} setState={setGenres} />
                    <PlatformsInput state={platforms} setState={setPlatforms} />
                    <button type="submit" className={submit}>
                        Crear
                    </button>
                </form>
            </div>
        </>
    );
}

export default ControlledForm;