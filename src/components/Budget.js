/*In Budget.js you will be adding text and value for your budget. 
You will be importing app context and the useContext hook, and pass 
your AppContext to it - this is how a component connects to the context 
in order to get values from global state */

import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);

    const [bud, setBud] = useState('');

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                        placeholder={budget}
                        required='required'
                        type='number'
                        id='budget'
                        value={bud}
                        style={{size: 10}}
                        onChange={(event) => setBud(event.target.value)}>
                </input>
            </span>    
        </div>
    );
};

export default Budget;
