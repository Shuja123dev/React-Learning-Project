import React, { useState } from 'react'

const Button = ({ children, gatter }) => {

    const [num, setNum] = useState(10)

    // callBack(num)
    const handleClick = () => {
        setNum(num + 1)
    }
    gatter(num)

    return (
        <button style={{ background: 'blue' }} onClick={handleClick}>{children}</button>
    )
}

export default Button