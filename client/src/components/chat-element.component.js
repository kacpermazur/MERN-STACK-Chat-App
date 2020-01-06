import React, { Component } from "react";
import { Comment } from "semantic-ui-react";

class ChatElement extends Component {
  render() {
    return (
      <Comment.Group>
        <Comment.Avatar
          style={{
            height: "50px",
            width: "50px",
            float: "left",
            marginRight: "1em"
          }}
          src={"https://image.flaticon.com/icons/svg/149/149071.svg"}
        />
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Group>
    );
  }
}

export default ChatElement;
