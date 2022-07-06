import React, { useEffect } from 'react';
import {validate} from '../../../form-validations/name';
import { form_group, message_valid, message_invalid, label_valid, input_invalid, input, i, i_valid, label_invalid } from '../styles/ControlledForm.module.css';
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

const NameInput = ({ state, setState, currentName }) => {

    const names = useSelector(state => state.selects.names);

    function handleChange(event) {
        setState({ ...state, value: event.target.value });
    }

    useEffect(() => {
        if (state.valid === false) {
            validate(state, setState, names, currentName)
        }
    }, [state.value])

    return (
        <div className={form_group}>
            <label className={`${state.valid === false && label_invalid} ${state.valid && label_valid}`} htmlFor='name-input'>Título</label>
            <FaCheckCircle className={`${i} ${state.valid && i_valid}`} />
            <input
                className={`${input} ${state.valid === false && input_invalid}`}
                type='text'
                id='name-input'
                placeholder='Título...'
                autoComplete="off"
                value={state.value}
                onChange={e => handleChange(e)}
                onBlur={e => validate(state, setState, names, currentName)}
            />
            <h5 className={state.valid === false ? message_invalid : message_valid}>{state.message || 'message'}</h5>
        </div>
    );
};

export default NameInput;