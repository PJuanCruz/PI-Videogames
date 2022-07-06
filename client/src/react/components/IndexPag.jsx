import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions';
import { container, active_btn, btn } from './styles/IndexPag.module.css';

const IndexPag = ({ totalPages }) => {

    const index = [];
    for (let i = 1; i <= totalPages; i++) {
        index.push(i);
    }

    const dispatch = useDispatch();

    const page = useSelector(state => state.data.page);

    function handleClickPrev(event) {
        if (page !== 1) {
            dispatch(setPage(page - 1));
        }
    }

    function handleClickIndex(event) {
        const index = parseInt(event.target.value);
        if (page !== index) {
            dispatch(setPage(index));
        }
    }

    function handleClickNext(event) {
        if (page !== totalPages) {
            dispatch(setPage(page + 1));
        }
    }

    return (
        <div className={container}>
            <button className={btn} onClick={e => handleClickPrev(e)}>«</button>
            {
                index.map(e => (
                    <button
                        className={`${btn} ${page === e && active_btn}`}
                        key={e}
                        value={e}
                        onClick={e => handleClickIndex(e)}
                    >
                        {e}
                    </button>
                ))
            }
            <button className={btn} onClick={e => handleClickNext(e)}>»</button>
        </div>
    );
}

export default IndexPag;