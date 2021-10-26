import React from "react";

const CountriesWorld = () => {
    const [items, setItems] = React.useState([])
    const [fillItems, setFillItems] = React.useState([])

    React.useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then(res => res.json())
            .then(json => setItems(json))  
    }, [])

    React.useEffect(() => {
        setFillItems(items)
    }, [items])

    const searchHandler = (e) => {
        const filterItems = items.filter(t => t.name.toLowerCase().indexOf(e.target.value) > -1);
        setFillItems(filterItems)
    }
    
    return (
        <div>
            <input type="search" name='search' htmlFor='search' onChange={searchHandler} />
            {fillItems.map((i,key) => {
                return <pre key={key}><li>{JSON.stringify(i.name)}</li></pre>
            })}
        </div>
    )
}

export default CountriesWorld