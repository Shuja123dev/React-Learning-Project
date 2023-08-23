import React from 'react'

const Quiz1 = () => {
    const valueArray = [
        'Ali',
        123,
        'developer',
        10000
    ]
    const [ali, pass, dev] = valueArray;
    return (
        <div>{dev}</div>
    )
}

export default Quiz1