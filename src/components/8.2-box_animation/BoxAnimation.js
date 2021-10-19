import React from 'react';
import './style.css';

class BoxAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { box: '' }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ box: 'box1' })
        }, 1000);
        setTimeout(() => {
            this.setState({ box: '' })
        }, 4000);
    }
    // componentDidUpdate() {
    //     // document.querySelector(`.${this.state.box}`).innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
    // }

    render() {

        return (
            <div className='color'>
                <div class={this.state.box} style={{ width: this.props.size, height: this.props.size }}></div>
            </div>
        )
    }
}

export default BoxAnimation;
