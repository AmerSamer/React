import React from "react";

const Delete = ({ name , method }) => {
    const returnCheck = () => {
        method()
    }

    return (
        <div >
            <input type="checkbox" name={name} onChange={returnCheck}/>
            <label htmlFor={name}> {name} </label>
        </div>
    )
}

export default Delete
// {...isChecked ? 'checked' : ''}