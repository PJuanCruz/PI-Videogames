import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getGenres } from '../../../redux/actions';
import style, { form_group, input_select, message_valid, message_invalid, label_valid, label_invalid, i, i_valid } from '../styles/ControlledForm.module.css';
import { FaCheckCircle } from "react-icons/fa";
import validate from '../../../form-validations/genres';

const GenresInput = ({ state, setState }) => {
    const dispatch = useDispatch();

    const genres = useSelector(state => state.selects.genres);

    useEffect(() => {
        if (!genres.length) {
            dispatch(getGenres());
        }
    }, []);


    function handleChange(event) {
        if (!state.value.includes(parseInt(event.target.value))) {
            setState({ ...state, value: [...state.value, parseInt(event.target.value)] })
        }
    }
    const mount = useRef(true);

    useEffect(() => {
        if (!mount.current) {
            validate(state, setState)
        } else {
            mount.current = false;
        }
    }, [state.value])

    function handleClick(event) {
        event.preventDefault();
        console.log(event.target.value)
        setState({...state, value: [...state.value.filter(e => e !== parseInt(event.target.value))]})
    }
    
    console.log(genres)
    return (
        <div className={form_group}>
            <label className={`${state.valid === false && label_invalid} ${state.valid && label_valid}`} htmlFor='genres-input'>Genres</label>
            <FaCheckCircle className={`${i} ${state.valid && i_valid}`} />
            <select id='genres-input' className={input_select} value='default' onChange={e => handleChange(e)}>
                <option disabled value='default'>Select genres</option>
                {
                    genres.map(e => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                    ))
                }
            </select>
            <h5 className={state.valid === false ? message_invalid : message_valid}>{state.message || 'message'}</h5>
            {
                state.value.map(e => (
                    <button key={e} value={e} onClick={e => handleClick(e)}>{genres.find(el => el.id === e).name}</button>
                    ))
                }
        </div>
    );
};

export default GenresInput;