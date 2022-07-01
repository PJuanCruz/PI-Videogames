import React, { useEffect } from 'react';
import style, { form_group, message_valid, message_invalid, label_valid, input_invalid, input, label_invalid, i, i_valid } from '../styles/ControlledForm.module.css';
import { FaCheckCircle } from "react-icons/fa";
import {validate} from '../../../form-validations/rating';

const RatingInput = ({ state, setState }) => {
    function handleChange(event) {
        let currentValue = event.target.value;
        if (event.nativeEvent.inputType === 'insertText' && (currentValue.length === 1)) {
            currentValue = currentValue + '.';
        } else if (event.nativeEvent.inputType === 'insertText' && (currentValue.length === 2)) {
            currentValue = currentValue[0] + '.' + currentValue[1];
        } else if (event.nativeEvent.inputType === 'deleteContentBackward' && (currentValue.length === 2)) {
            currentValue = currentValue[0];
        }

        if (/^[0-9]$|^[0-9]\.$|^[0-9]\.[0-9]{1,2}$|^[0-9]\.[0-9]{2}$/.test(currentValue) || currentValue === '') {
            setState({ ...state, value: currentValue });
        }
    }

    useEffect(() => {
        if (state.valid === false) {
            validate(state, setState);
        }
    }, [state.value])
    
    return (
        <div className={form_group}>
            <label className={`${state.valid === false && label_invalid} ${state.valid && label_valid}`} htmlFor='rating-input'>Rating</label>
            <FaCheckCircle className={`${i} ${state.valid && i_valid}`} />
            <input
                className={`${input} ${state.valid === false && input_invalid}`}
                type='text'
                id='rating-input'
                placeholder='5.00'
                autoComplete="off"
                value={state.value}
                onChange={e => handleChange(e)}
                onBlur={e => validate(state, setState)}
            />
            <h5 className={state.valid === false ? message_invalid : message_valid}>{state.message || 'message'}</h5>
        </div>
    );
};

export default RatingInput;