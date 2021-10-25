import React from "react";
// import Child from "./Child";

const Parent = () => {
    const [text] = React.useState('samer Amer')
    const [maxLength, setMaxLength] = React.useState(7)
    const [isOpen, setIsOpen] = React.useState(false)

    const callSet = () => {
        if(isOpen){
            setMaxLength(7)
            setIsOpen(!isOpen)
        }else{
            setMaxLength([...text].length)
            setIsOpen(!isOpen)
        }
    }
  
    return (
        <div>
            <div >
                {text.slice(0, maxLength)}
                <button onClick={callSet}>  
                    {isOpen ? 'less' : 'more'}
                </button>
            </div>
        </div>
    )
}

export default Parent
