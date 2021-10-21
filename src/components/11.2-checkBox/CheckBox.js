import React from "react";
import ChildCheckBox from "./ChildCheckBox";

const arrayTerms = ["I read the term of the app", "I accept the term of the app", "I want to get the weekly news letter", "I want to get sales and offers"];

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { terms: "" , isChecked:false }
    }

    onTermCheck = (term) => {
        this.setState({ terms: term,isChecked: !this.state.isChecked });
    };

    render() {
        return (
            <div>
                {arrayTerms.map((term, index) => {
                    // console.log(index);
                    if (index % 2 === 0) {
                        return (
                            <ChildCheckBox method={this.onTermCheck} term={term} key={index} defaultChecked={false} />
                        )
                    }
                    return (
                        <ChildCheckBox method={this.onTermCheck} term={term} key={index} defaultChecked={true}/>
                    );
                })}
            </div>
        )
    }
}

export default CheckBox;
