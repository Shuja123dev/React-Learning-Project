import React, { useState } from 'react'

const Day2 = () => {

    let testVar = 'hello'

    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    // const testFun = () => {
    //     return 200
    // }
    // const testFun1 = () => {
    //     return 300
    // }
    // const [fun, setFun] = useState(num);
    const handleClick = () => {
        let testNUm = 0
        for (let n = 1; n <= 5; n++) {
            setNum(num + n);
            setNum1(5)
            console.log(n);
            if (n === 3) {
                break;
            }
        }
        // setNum(num + 1);
        // console.log('first set');

        // setNum(num + 10);
        // console.log('second set');
        // setNum(num + 1)

        // console.log(num);
    }
    console.log(num, num1);
    console.log("Render");
    // const [num2, setNum2] = useState(num);
    // let x = 5;

    // console.log('rendered');
    // console.log(num);
    // console.log(num2);



    // console.log(num);

    return (
        <>
            {num}
            <br />
            {/* {num2} */}
            <br />
            <br />
            <button onClick={handleClick}>+</button>
        </>
    )
}

export { Day2 }