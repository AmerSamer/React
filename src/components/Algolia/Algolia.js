import React from "react";
import Spinner from "./Spinner";
const Algolia = () => {
    const [subject, setSubject] = React.useState("hooks");
    const [search , setSearch] = React.useState('');
    const [subjectsList, setSubjectsList] = React.useState(null);
    
    React.useEffect(() => {
        getData()
    }, [subject])
    const getData = async()=>{
        const response =await( await fetch(`https://hn.algolia.com/api/v1/search?query=${subject}`)).json()
        console.log("response :",response.hits)
        setSubjectsList(response.hits);
    }
    const textHandler= (e)=>{
        setSearch(e.target.value)
    }
    const searchHandler = ()=>{
        setSubjectsList(null)
        setSubject(search)
    }
    return (
        <div>
            <input type={'text'} name={'search'} onChange={textHandler}/>
            <input type={'button'} value={'search'} onClick={searchHandler}/>
            <br/>
            {
               subjectsList ? subjectsList.map((s,index)=>{
                    return <p key={index}><li><a key={s.objectId} href={s.url}>{s.title}</a></li></p>
                }) : <Spinner />
            }
        </div>
    )
}


export default Algolia