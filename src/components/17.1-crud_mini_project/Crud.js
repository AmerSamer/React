import React from "react";
import axios from "axios";
import Spinner from "./Spinner";
// import DeleteUser from "./DeleteUser";
import './style.css';
const Crud = () => {
    const [users, setUsers] = React.useState(null);
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [country, setCountry] = React.useState('');
    React.useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const response = await axios.get(`https://6177fd749c328300175f5ce6.mockapi.io/users`)
        console.log(response.data);
        setUsers(response.data)
    }
    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const ageHandler = (e) => {
        setAge(e.target.value);
    }
    const countryHandler = (e) => {
        setCountry(e.target.value);
    }
    const addHandler = async () => {
        let data = {
            name: name,
            age: age,
            country: country,
        }
        const res = await axios.post('https://6177fd749c328300175f5ce6.mockapi.io/users', data)
        console.log("post :", res)
        let newData = res.data
        const usersList = [...users];
        usersList.push(newData)
        setUsers(usersList)
        setName('');
        setAge('');
        setCountry('');
    }
    const removeHandler = async (id) => {
        const deleteRes = await axios.delete(`https://6177fd749c328300175f5ce6.mockapi.io/users/${id}`)
        if (deleteRes.status === 200) {
            const usersList = [...users];
            let resultOfNonDeleted = usersList.filter((usr) => {
                return usr.id !== id
            })
            setUsers(resultOfNonDeleted)
        }
    }

    return (
        <div>
            <div className='inputs'>
            Name: <input type='text' value={name} name='name' placeholder='Name' onChange={nameHandler} />
            &nbsp; Age: <input type='number' value={age} name='age' placeholder='Age' onChange={ageHandler} />
            &nbsp; Country: <input type='text' value={country} name='country' placeholder='Country' onChange={countryHandler} />
            &nbsp; <input type='button' value='Add' onClick={addHandler} />
            </div>
            <div id="grid">
            {
                users ? users.map((i, index) => {
                    return (
                        <div key={index} >
                            <pre className={'styling'}> createdAt: {i.createdAt} <br />name: {i.name} <br /> age: {i.age} <br /> country: {i.country}
                                <br />
                                {/* <DeleteUser id={i.id} method={removeHandler} users={users}/> */}
                                <input className='remove' type='button' value='remove' onClick={() => {
                                    removeHandler(i.id)
                                }} />
                            </pre>
                        </div>
                    )
                }) : <Spinner />
            }
           </div> 
        </div>
    )
}

export default Crud