import React from "react";

const Child = ({ text, maxLength , callSet , isOpen }) => {
 
const isLonger = () => {
    // console.log(maxLength);
    if([...text].length > maxLength){
        callSet(maxLength)
    }else{
        callSet([...text].length)
    }
     
}

    return (
        <div>
            {/* {text} */}
            {/* <input type={'button'} onClick={isLonger} value={''}/> */}
            <button onClick={isLonger}>
                    {isOpen ? 'less' : 'more'}
                </button>
        </div>
    )
}

export default Child