import React from 'react'

const Child = ({ children, getter }) => {
    // console.log(myData);
    // const { name } = props
    getter(10)
    // console.log(props);
    return (
        <>
            {/* <p>Price: {props.price}</p>
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p> */}

            {/* <p>Price: {price}</p>
            <p>Name: {name}</p>
            <p>Type: {type}</p> */}

        </>
    )
}

export default Child