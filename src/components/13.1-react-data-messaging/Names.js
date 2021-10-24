import React from 'react';

const Names = (props) => {
    return (
        <div onClick={() => props.method(props.names)}>
            {props.names}
        </div>
    )
}

export default Names;