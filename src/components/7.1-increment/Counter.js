import React from 'react';

let counter = 0

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    render() {
        const inc = () => {
            counter++
            this.setState({ count: counter })
        }
        return (
            <div className='counter'>
                <input onClick={inc} type='button' value='increment' />
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export default Counter;
