import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <input
        type="button"
        value={this.props.name}
        style={{ fontWeight: this.props.fontWeight }}
      />
    );
  }
}


export default Buttons;
