import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'gray' }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'blue' })
        }, 3000);
    }
    componentDidUpdate() {
        document.querySelector("#empty").innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
    }

    render() {

        return (
            <div className='color'>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <div id='empty'></div>
            </div>
        )
    }
}

export default Color;
