import React from 'react';

const Card = (props) => {

    return (
        <div onClick={() => props.method(props.names, props.birthday, props.meat, props.fish)}>
            {
                <div> {props.names} | {props.birthday} | {props.meat} | {props.fish}</div>
            }
        </div>
    )
}

export default Card;