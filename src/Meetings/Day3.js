import React, { useCallback, useEffect, useState } from 'react'

const Day3 = () => {

    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(1);

    // console.log('render')
    const handleClick = () => {
        setCount1(count1 + 1);
    }

    const effectFun = useCallback(() => {
        console.log('effect');
        // setCount1(count1 + 5);
    })
    console.log(count1);

    useEffect(() => {
        effectFun()
    }, [count1])

    return (
        <div>
            {count1}
            <button onClick={handleClick}>increment</button>
        </div>
    )
}

export default Day3