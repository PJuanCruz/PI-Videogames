import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { validate } from '../../../form-validations/platforms';
import { getPlatforms } from '../../../redux/actions';
import { form_group, input_select, message_valid, message_invalid, label_valid, i, i_valid, label_invalid, selected } from '../styles/ControlledForm.module.css';
import { FaCheckCircle } from "react-icons/fa";

const PlatformsInput = ({ state, setState }) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPlatforms());
    }, [dispatch]);

    const platforms = useSelector(state => state.selects.platforms);

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
        setState({ ...state, value: [...state.value.filter(e => e !== parseInt(event.target.value))] })
    }

    return (
        <div className={form_group}>
            <label className={`${state.valid === false && label_invalid} ${state.valid && label_valid}`} htmlFor='platforms-input'>Plataformas</label>
            <FaCheckCircle className={`${i} ${state.valid && i_valid}`} />
            <select id='platforms-input' className={input_select} value='default' onChange={e => handleChange(e)}>
                <option disabled value='default'>Seleccionar plataformas</option>
                {
                    platforms.map(e => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                    ))
                }
            </select>
            <h5 className={state.valid === false ? message_invalid : message_valid}>{state.message || 'message'}</h5>
            {
                state.value?.map(e => (
                    <button className={selected} key={e} value={e} onClick={e => handleClick(e)}>{platforms.find(el => el.id === e).name}</button>
                ))
            }
        </div>
    );
};

export default PlatformsInput;