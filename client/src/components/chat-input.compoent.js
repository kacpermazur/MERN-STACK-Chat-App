import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: "",
      profile: ""
    };
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          placeholder="name"
          value={this.state.username}
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
          required
        />

        <Form.TextArea
          value={this.state.content}
          placeholder="type here message..."
          onChange={e => {
            this.setState({ content: e.target.value });
          }}
          required
        />
        <Form.Input
          value={this.state.profile}
          placeholder="www.website.com/image.png..."
          onChange={e => {
            this.setState({ profile: e.target.value });
          }}
        />

        <Button type="submit">Submit</Button>
      </Form>
    );
  }

  onSubmit = () => {
    this.props.onSubmit(
      this.state.username,
      this.state.content,
      this.state.profile
    );
    this.setState({
      content: ""
    });

    console.log("INPUT: TEST");
  };
}

export default UserInput;
