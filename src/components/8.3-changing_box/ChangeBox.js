import React from 'react';
import './style.css';

let j = 0
const randNum = () => Math.floor(Math.random() * 256);

function changeColor() {
    return `rgb(${randNum()},${randNum()},${randNum()})`;
}


class ChangeBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { box: 'box1' }
    }

    componentDidMount() {
        for (let i = 0; i < 100 ; i++) {
            if(i < 4){
                j = j + 1000
                setTimeout(() => {
                    this.setState({ box: 'box1' })
                }, j);
            }else{
                j = j + 1000
                setTimeout(() => {
                    this.setState({ box: 'circle1' })
                }, j);
            }            
        }
    }
    // componentDidUpdate() {
    //     // document.querySelector(`.${this.state.box}`).innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
    // }

    render() {

        return (
            <div className='color'>
                <div class={this.state.box} style={{ background: `${changeColor()}` }}></div>
            </div>
        )
    }
}

export default ChangeBox;
