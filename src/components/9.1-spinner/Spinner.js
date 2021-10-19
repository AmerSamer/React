import React from 'react';
import './style.css';

// let items = [{ one: 'ui active dimmer', two: 'ui big text loader' },
//     { one: "ui active inverted dimmer", two: 'ui big text loader' }];
// let item = items[Math.floor(Math.random() * items.length)];

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { firstClass: `ui active dimmer`, secondClass: `ui big text loader` }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ firstClass: '', secondClass: '' })
        }, 3000);
        
    }
    componentDidUpdate() {
        document.body.innerHTML = 'Your Data...';
    }
    render() {
        return (
            <div className={this.state.firstClass}>
                <div className={this.state.secondClass}>{this.props.message}</div>
            </div>
        )
    }
}

export default Spinner;
