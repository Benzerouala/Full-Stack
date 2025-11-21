import React from 'react'

const CounterButton = ({ onIncrement }) => {
    return (
        <button onClick={onIncrement}>
            +
        </button>
    );

}

export default CounterButton