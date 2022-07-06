import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';
import styles, { container, select, i_close } from './styles/Filter.module.css';
import { FaTimes } from "react-icons/fa";

const FilterStatus = () => {

    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(setStatusFilter(event.target.value));
    }

    const currentStatus = useSelector(state => state.filters.status);

    function handleClick(event) {
        dispatch(setStatusFilter('All'));
    }

    return (
        <div className={container}>
            <select className={select} value={currentStatus} onChange={e => handleChange(e)}>
                <option value={'All'}>All</option>
                <option value={'Created'}>Created</option>
                <option value={'Existing'}>Existing</option>
            </select>
            {
                currentStatus !== 'All' && <FaTimes className={i_close} onClick={e => handleClick(e)} />
            }
        </div>
    );
}

export default FilterStatus;