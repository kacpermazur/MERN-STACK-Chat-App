import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UserInput extends Component {
  render() {
    return (
      <Form onSubmit="">
        <Form.Input placeholder="name" required />
        <Form.TextArea placeholder="Message Goes Here..." required />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default UserInput;
