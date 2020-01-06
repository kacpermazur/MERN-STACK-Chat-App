import React, { Component } from "react";
import { Comment } from "semantic-ui-react";

class ChatElement extends Component {
  render() {
    return (
      <Comment.Group>
        <Comment.Avatar src="/images/avatar/small/matt.jpg" />
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Group>
    );
  }
}

export default ChatElement;
