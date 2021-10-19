import React from 'react';
import './style.css';

class ChuckNorris extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {totalReactPackages: '' }
    }
    onc = async ()=>{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        this.setState({ totalReactPackages: data.value })
    }
    oncc = async (input)=>{
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${input}`);
        const data = await response.json();
        this.setState({ totalReactPackages: data.value })
    }
   
    componentDidUpdate() {
        document.querySelector('.s').innerHTML = this.state.totalReactPackages;
    }

    render() {
        return (
            <div >
                <h1>Pick Random Joke:</h1>
                <input onClick={()=>this.onc()} type='button' value='Random Joke' />
                <br/>
                <h1>chooce Category:</h1>
                <input onClick={()=>this.oncc('animal')} type='button' value='animal' />
                <input onClick={()=>this.oncc('career')} type='button' value='career' />
                <input onClick={()=>this.oncc('celebrity')} type='button' value='celebrity' />
                <input onClick={()=>this.oncc('dev')} type='button' value='dev' />
                <input onClick={()=>this.oncc('explicit')} type='button' value='explicit' />
                <input onClick={()=>this.oncc('fashion')} type='button' value='fashion' />
                <input onClick={()=>this.oncc('food')} type='button' value='food' />
                <input onClick={()=>this.oncc('history')} type='button' value='history' />
                <input onClick={()=>this.oncc('money')} type='button' value='money' />
                <input onClick={()=>this.oncc('movie')} type='button' value='movie' />
                <input onClick={()=>this.oncc('music')} type='button' value='music' />
                <input onClick={()=>this.oncc('political')} type='button' value='political' />
                <input onClick={()=>this.oncc('religion')} type='button' value='religion' />
                <input onClick={()=>this.oncc('science')} type='button' value='science' />
                <input onClick={()=>this.oncc('sport')} type='button' value='sport' />
                <input onClick={()=>this.oncc('travel')} type='button' value='travel' />
                <br/><br/><br/>
                <h2>Joke:</h2>
                <div className='s'></div>
            </div>
        )
    }
}

export default ChuckNorris;
