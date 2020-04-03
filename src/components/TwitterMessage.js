import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

handleChange = (event) => {
  // console.log(event.target.value);
  this.setState({
    input: event.target.value,
  })
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.input}/>
        <br></br>
    <label>{this.props.maxChars - this.state.input.length} characters remaining</label>
      </div>
    );
  }
}

export default TwitterMessage;
