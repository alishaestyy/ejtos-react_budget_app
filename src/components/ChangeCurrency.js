import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const [curr, setCurr] = useState({currency});

    const submitEvent = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        });
};

    return (
        <div className='alert alert-success'>
            <select className="custom-select" id="inputGroupSelect01" onChange={submitEvent} onInput={(event) => setCurr(event.target.value)}>
                <option defaultValue>Currency ({currency})</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default ChangeCurrency;