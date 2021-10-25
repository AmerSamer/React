import React from "react";
import Delete from "./Delete";
// import './style.css'

let arr = ["one", "two", "three", "four", "five"];
// let arrr = [{0 : "one" , 1 : true},{0 : "two" , 1 : true},{0 : "three" , 1 : true}, {0 : "four" , 1 : true}, {0 : "five" , 1 : true}];
const MarkDelete = () => {

    const [array, setArray] = React.useState(arr)
    const [isChecked, setIsChecked] = React.useState(true)

    const checked = () => {
        setIsChecked(!isChecked)
    }
    const removeItems = (e) => {
        // console.log(e3);
        let arrHelper = [...arr]
        arrHelper.pop()
        setArray(arrHelper)
    }
    const resetAll = () => {
        setArray(arr)
    }
    // const returnCheck = () => {
    //     method()
    // }
    return (
        <div>
            {
                array.map((u, key) => {
                    return (
                        <Delete key={key} name={u} method={checked}/>
                        // <div key={key}>
                        //     <input type="checkbox" name={u} checked={isChecked} onClick={checked} />
                        //     <label htmlFor={u}> {u} </label>
                        // </div>
                    )
                })
            }

            <input type="button" value='Delete' onClick={removeItems} />
            <input type="button" value='Reset All' onClick={resetAll} />
        </div>
    )
}

export default MarkDelete
// {...isChecked ? 'checked' : ''}