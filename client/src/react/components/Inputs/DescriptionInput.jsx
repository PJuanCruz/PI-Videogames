import React, { useEffect } from 'react';
import {validate} from '../../../form-validations/description';
import style, { form_group, message_valid, message_invalid, label_valid, input_textarea, input_textarea_invalid, label_invalid, i, i_valid } from '../styles/ControlledForm.module.css';
import { FaCheckCircle } from "react-icons/fa";

const DescriptionInput = ({ state, setState }) => {
    function handleChange(event) {
        setState({ ...state, value: event.target.value });
    }

    // function validate() {
    //     if (state.value.length > 120) {
    //         setState({ ...state, valid: false, message: 'El campo no puede tener más de 120 caracteres' });
    //     } else if (!state.value.length) {
    //         setState({ ...state, valid: false, message: 'El campo no puede estar vacío' });
    //     } else if (state.value.length < 10) {
    //         setState({ ...state, valid: false, message: 'El campo debe tener por lo menos 10 caracteres' });
    //     } else {
    //         setState({ ...state, valid: true, message: null });
    //     }
    // }

    useEffect(() => {
        if (state.valid === false) {
            validate(state, setState)
        }
    }, [state.value])

    return (
        <div className={form_group}>
            <label className={`${state.valid === false && label_invalid} ${state.valid && label_valid}`} htmlFor='description-input'>Description</label>
            <FaCheckCircle className={`${i} ${state.valid && i_valid}`} />
            <textarea
                className={`${input_textarea} ${state.valid === false && input_textarea_invalid}`}
                id='description-input'
                placeholder='Description...'
                value={state.value}
                onChange={e => handleChange(e)}
                onBlur={e => validate(state, setState)}
            />
            <h5 className={state.valid === false ? message_invalid : message_valid}>{state.message || 'message'}</h5>
        </div>
    );
};

export default DescriptionInput;