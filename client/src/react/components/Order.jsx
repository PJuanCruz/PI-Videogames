import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../redux/actions';
import { container, select } from './styles/Filter.module.css';

const Order = () => {

    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(setOrder(event.target.value));
    }

    const currentOrder = useSelector(state => state.filters.order);

    return (
        <div className={container}>
            <select className={select} value={currentOrder} onChange={e => handleChange(e)}>
                <option disabled value={'None'}>Sort by...</option>
                {/* <option value={'Random'}>Random</option> */}
                <option value={'AZ'}>AZ</option>
                <option value={'ZA'}>ZA</option>
                <option value={'Rating ASC'}>Rating ↑</option>
                <option value={'Rating DESC'}>Rating ↓</option>
            </select >
        </div>
    );
}

export default Order;