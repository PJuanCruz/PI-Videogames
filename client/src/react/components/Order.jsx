import React from 'react'

const Order = () => {

    return (
        <div>
            <select>
                <option disabled value={'None'}>Sort by...</option>
                <option value={'Random'}>Random</option>
                <option value={'AZ'}>AZ</option>
                <option value={'ZA'}>ZA</option>
                <option value={'Rating ASC'}>Rating ↑</option>
                <option value={'Rating DESC'}>Rating ↓</option>
            </select >
        </div>
    );
}

export default Order;