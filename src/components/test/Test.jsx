import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {firstName: '' , lastName: '',age:'21-30', freeText: '' };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeLast = this.handleChangeLast.bind(this);
      this.handleChangeAge = this.handleChangeAge.bind(this);
      this.handleChangeFreeText = this.handleChangeFreeText.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({firstName: event.target.value});
      console.log(this.state);
    }
    handleChangeLast(event) {
        this.setState({lastName: event.target.value});
        console.log(this.state);
      }
      handleChangeAge(event) {
        this.setState({age: event.target.value});
        console.log(this.state);
      }
      handleChangeFreeText(event) {
        this.setState({freeText: event.target.value});
        console.log(this.state);
      }
     
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName + ' ' + this.state.age+ ' ' + this.state.freeText);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <br/>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName} onChange={this.handleChangeLast} />
          </label>
          <br/><br/>
          <label>
          Age:
          <select value={this.state.age} onChange={this.handleChangeAge}>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
            <option value="41-50">41-50</option>
            <option value="51-60">51-60</option>
          </select>
        </label>
        <br/><br/>
          <label>
          Free Text:
          <textarea value={this.state.freeText} onChange={this.handleChangeFreeText} />
        </label>
        <br/><br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NameForm;
