import React, { useState } from 'react'

// const useState = (initialValue) => {
//     return [
//         initialValue,
//         (setValue1) => {
//             return {
//                 setValue1,
//                 // (setValue1) => {
///
//                 // }
//             }
//         }
//     ]
// }

const Day1 = () => {

    const destructureArr = [10, 'Ali'];

    const objDestructure = {
        useName: 'Ali',
        rollNo: 10,
        password: 1234
    }


    // const dataArray = [
    //     { name: 'Ali', rollNo: 10 },
    //     { name: 'Hassan', rollNo: 10 },
    //     { name: 'Rizwan', rollNo: 10 }
    // ]

    // const [obj1, obj2] = dataArray

    const stateUser = useState()
    const [state, setState] = useState(10)

    const [ArrayState, name] = destructureArr;

    const { password } = objDestructure;

    if (state === 9) {
        // const [mystate, setMyState] = stateUser(10)
    }

    // const handleClick = function(value)  {
    //   console.log(value);
    // }
    const handleClick = (value) => {
        console.log(value);
    }

    return (
        <div>
            {ArrayState}
            {name}
            {password}
            {/* <div>{obj2.name}</div> */}
            {/* {state} */}
            {/* <button onClick={() => console.log('hello')}>hello</button > */}
            {/* <button onClick={handleClick('name')}>increment</button> */}
        </div>
    )
}

export default Day1