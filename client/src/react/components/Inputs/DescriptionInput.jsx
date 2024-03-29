import React, { useEffect } from 'react';
import {validate} from '../../../form-validations/description';
import { form_group, message_valid, message_invalid, label_valid, input_textarea, input_textarea_invalid, label_invalid, i, i_valid } from '../styles/ControlledForm.module.css';
import { FaCheckCircle } from "react-icons/fa";

const DescriptionInput = ({ state, setState }) => {
    function handleChange(event) {
        setState({ ...state, value: event.target.value });
    }

    useEffect(() => {
        if (state.valid === false) {
            validate(state, setState)
        }
    }, [state.value])

    return (
        <div className={form_group}>
            <label className={`${state.valid === false && label_invalid} ${state.valid && label_valid}`} htmlFor='description-input'>Descripción</label>
            <FaCheckCircle className={`${i} ${state.valid && i_valid}`} />
            <textarea
                className={`${input_textarea} ${state.valid === false && input_textarea_invalid}`}
                id='description-input'
                placeholder='Descripción...'
                value={state.value}
                onChange={e => handleChange(e)}
                onBlur={e => validate(state, setState)}
            />
            <h5 className={state.valid === false ? message_invalid : message_valid}>{state.message || 'message'}</h5>
        </div>
    );
};

export default DescriptionInput;