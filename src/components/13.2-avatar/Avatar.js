// import React from 'react';

// const Avatar = (props) => {
//     return (
//         <div onClick={() => props.method(props.names)}>
//             {props.names}
//         </div>
//     )
// }

// export default Avatar;

import React from 'react';
// import './style.css';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {totalReactPackages: [] }
    }
    onc = async ()=>{
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        // console.log(data.results[0].picture.large);
        // this.setState({ totalReactPackages: data.results[0].picture.large })
    }
    async componentDidMount(){
        let arr = [];
        for(let i = 0 ; i < 10 ; i++){
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            // SHOUKD CHANGED
            arr.push({ totalReactPackages: data.results[0].picture.large }) // SHOUKD CHANGED 
            console.log(data);
        }
        this.setState({ totalReactPackages:arr })
    }
    componentDidUpdate() {
        // document.querySelector('.s').innerHTML = <img src={this.state.totalReactPackages} />
    }

    render() {
        console.log(this.state.totalReactPackages);
        return (
            <div >

                {
                    this.state.totalReactPackages.map((u)=>{
                        // SHOUKD CHANGED
                        return <img src={u.totalReactPackages}/>   // SHOUKD CHANGED
                    })
                }
               {/* {
                    data.map((i, key) => {
                        return (
                            <Names method={this.handleClickName} names={i.name} key={key} />
                        )
                    })

                } */}
                {/* <h1>Pick Random Joke:</h1>
                <input onClick={()=>this.onc()} type='button' value='Random Joke' />
                <h2>Joke:</h2> */}
                <div className='s'>
                <img src={this.state.totalReactPackages} />
                </div>
            </div>
        )
    }
}

export default Avatar;
