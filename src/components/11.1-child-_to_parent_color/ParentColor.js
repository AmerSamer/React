import React from "react";
import ChildColor from "./ChildColor";

const colors = ["blue", "red", "yellow", "black", "orange"];

class ParentColor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenColor: ""
        };
    }

    onColorClick = (color) => {
        this.setState({ chosenColor: color });
    };

    render() {
        return (
            <>
                <div>
                    the color selcted is :
                    <span style={{ color: this.state.chosenColor }}>
                        {" "}
                        {this.state.chosenColor}{" "}
                    </span>
                </div>
                {colors.map((color, index) => {
                    return (
                        <ChildColor method={this.onColorClick} color={color} key={index} />
                    );
                })}
                
            </>
        );
    }
}

export default ParentColor;
