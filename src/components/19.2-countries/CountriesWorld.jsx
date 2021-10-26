import React from "react";

const CountriesWorld = () => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])
    const searchHandler = (e) => {
        const filterItems = items.filter(t => t.name.toLowerCase().indexOf(e.target.value) > -1);
        setItems(filterItems)
    }
    return (
        <div>
            <input type="search" name='search' htmlFor='search' onChange={searchHandler} />
            {items.map((i,key) => {
                return <pre key={key}><li>{JSON.stringify(i.name)}</li></pre>
            })}
        </div>
    )
}

export default CountriesWorld