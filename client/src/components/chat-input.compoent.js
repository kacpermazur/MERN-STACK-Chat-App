import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: ""
    };
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.username, this.state.content);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <Form onSubmit={this.state.onSubmit}>
        <Form.Input
          placeholder="name"
          value={this.state.username}
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
          required
        />

        <Form.TextArea
          placeholder="Message Goes Here..."
          value={this.state.content}
          onChange={e => {
            this.setState({ content: e.target.value });
          }}
          required
        />

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default UserInput;
