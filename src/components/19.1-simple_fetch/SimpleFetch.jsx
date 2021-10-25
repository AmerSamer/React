import React from "react";

const SimpleFetch = () => {
    const [items,setItems] = React.useState([])
    
    React.useEffect(()=>{
        fetch(`https://swapi.dev/api/films/1/`)
        .then(res => res.json())
        .then(json => setItems(json))
    },[])

    return (
        <div>
            movie title : {items.title}
            <br/>
            director : {items.director}
        </div>
    )
}

export default SimpleFetch