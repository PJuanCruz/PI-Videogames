import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';

const FilterStatus = () => {

    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(setStatusFilter(event.target.value));
    }
    
    const currentStatus = useSelector(state => state.filters.status);

    return (
        <div>
            <select value={currentStatus} onChange={e => handleChange(e)}>
                <option value={'All'}>All</option>
                <option value={'Created'}>Created</option>
                <option value={'Existing'}>Existing</option>
            </select>
        </div>
    );
}

export default FilterStatus;