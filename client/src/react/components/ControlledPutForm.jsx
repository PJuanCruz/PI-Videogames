import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getVideogameById, getVideogamesDBNames, putVideogame, setSearch } from '../../redux/actions';
import DescriptionInput from './Inputs/DescriptionInput';
import GenresInput from './Inputs/GenresInput';
import NameInput from './Inputs/NameInput';
import PlatformsInput from './Inputs/PlatformsInput';
import RatingInput from './Inputs/RatingInput';
import ReleasedInput from './Inputs/ReleasedInput';
import { validate as validateDescription } from '../../form-validations/description';
import { validate as validateGenres } from '../../form-validations/genres';
import { validate as validateName } from '../../form-validations/name';
import { validate as validatePlatforms } from '../../form-validations/platforms';
import { validate as validateRating } from '../../form-validations/rating';
import { validate as validateReleased } from '../../form-validations/released';
import { container, form, submit, volver, icon, text } from './styles/ControlledForm.module.css'
import { Link, useHistory } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ControlledPutForm = ({ id }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogamesDBNames());
    }, [dispatch]);

    const names = useSelector(state => state.selects.names);

    const history = useHistory();

    useEffect(() => {
        if (!Object.keys(videogame).length) {
            dispatch(getVideogameById(id));
        }
    }, [dispatch]);

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
            dispatch(setSearch(''))
            alert('Videojuego actualizado exitosamente');
            history.push(`/videogames`)
        } else {
            validateName(name, setName, names, videogame.name);
            validateDescription(description, setDescription)
            validateReleased(released, setReleased)
            validateRating(rating, setRating)
            validateGenres(genres, setGenres)
            validatePlatforms(platforms, setPlatforms)
        }
    }

    useEffect(() => {
        setName({ value: videogame.name, valid: true, message: '' })
        setDescription({ value: videogame.description, valid: true, message: '' })
        setReleased({ value: videogame.released, valid: true, message: '' })
        setRating({ value: videogame.rating, valid: true, message: '' })
        setGenres({ value: videogame.genres?.map(e => e.id), valid: true, message: '' })
        setPlatforms({ value: videogame.platforms?.map(e => e.id), valid: true, message: '' })
    }, [videogame])

    return (
        <>
            <div className={volver}>
                <Link to='/videogames'>
                    <MdOutlineKeyboardBackspace className={icon} /><span className={text}>Volver</span>
                </Link>
            </div>
            <div className={container}>
                <form className={form} onSubmit={e => handleSubmit(e)}>
                    <NameInput state={name} setState={setName} currentName={videogame.name} />
                    <DescriptionInput state={description} setState={setDescription} />
                    <ReleasedInput state={released} setState={setReleased} />
                    <RatingInput state={rating} setState={setRating} />
                    <GenresInput state={genres} setState={setGenres} />
                    <PlatformsInput state={platforms} setState={setPlatforms} />
                    <button type="submit" className={submit}>
                        Actualizar
                    </button>
                </form>
            </div>
        </>
    );
}

export default ControlledPutForm;