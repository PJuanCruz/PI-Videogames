import React from 'react'

const FilterStatus = () => {

    const status = ['All', 'Created', 'Existing'];

    return (
        <div>
            <select>
                <option value={'All'}>All</option>
                <option value={'Created'}>Created</option>
                <option value={'Existing'}>Existing</option>
            </select>
        </div>
    );
}

export default FilterStatus;