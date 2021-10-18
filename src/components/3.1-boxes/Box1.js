import React from 'react';
import Box2 from './Box2'
import './style.css';

// const Box1 = () =>{
//  return (
//     <div className='box1'>
//         <Box2/>
//     </div>
//  )
// }

class Box1 extends React.Component {
    render() {
        return (
            <div className='box1'>
                <Box2 />
            </div>
        )
    }
}

export default Box1;