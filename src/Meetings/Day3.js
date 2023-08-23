import React, { useCallback, useEffect, useState } from 'react'

const Day3 = () => {

    const [count, setCount] = useState(1);


    const handleClick = useCallback(() => {
        setCount(count + 1);
        console.log('function is called');
    }, [])

    useEffect(() => {
        handleClick();
    }, [count])

    return (
        <div>
            {count}
            <button onClick={handleClick}>increment</button>
        </div>
    )
}

export default Day3