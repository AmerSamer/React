import React from "react";
import './style.css'

let arr = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
]

const Todo = () => {

    const [array, setArray] = React.useState(arr)

    const handkeClick = (e) => {
        let newArr = [...array]
        newArr[e.target.id].completed = !newArr[e.target.id].completed;
        setArray(newArr)
    }

    return (
        <div>
            {
                array.map((u, key) => {
                    return (
                        <li id={key} className={u.completed ? 'true' : 'false'} onClick={handkeClick} key={key}>
                            {u.name}
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Todo