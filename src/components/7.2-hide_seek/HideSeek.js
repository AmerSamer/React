import React from 'react';
import './style.css';

class HideSeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bool: false }
    }

    inc = () => {
        this.setState({ bool: !this.state.bool })
        console.log(this.state.bool);
    }

    render() {
         
        return (
            <div className='hide-seek'>
                <input onClick={ this.inc } type='button' value='show/hide' />
                <div className={this.state.bool ? 'box' : null}></div>
            </div>
        )
    }
}

export default HideSeek;
