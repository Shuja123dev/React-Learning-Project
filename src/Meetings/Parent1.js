import React, { useState } from 'react'
import Child from './Child'
import Button from './Button'

const Parent1 = () => {

    const dataObj = {
        userNam: 'Shuja',
        password: 1123
    }

    const { userNam } = dataObj
    console.log(userNam);


    const [childVal, setChildVal] = useState(1)

    const callBackVal = (value) => {
        // console.log(value);
        setChildVal(value)
    }
    console.log(childVal);

    let n = 1

    return (
        <>
            <Child getter={callBackVal} name='Addidas' price={1220} type='Shirt' data={dataObj} >
                Hello
            </Child>
            {/* <button onClick={() => callBackVal(10)}>Click</button> */}

            <Button gatter={callBackVal}>CLick Me</Button>
            <Button gatter={callBackVal}>Go There</Button>


            {/* {Child(dataObj)} */}
        </>
    )
}

export default Parent1