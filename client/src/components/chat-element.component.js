import React, { Component } from "react";
import { Comment } from "semantic-ui-react";

class ChatElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|svg|png)/
    };
  }

  render() {
    return (
      <Comment.Group>
        {this.props.messages.map((message, index) => {
          return (
            <Comment key={"c" + index}>
              <Comment.Avatar
                style={{
                  height: "50px",
                  width: "50px",
                  float: "left",
                  margin: "0 1em 0 0"
                }} //
                src={
                  this.state.regex.test(message.profile)
                    ? message.profile
                    : "https://image.flaticon.com/icons/svg/149/149071.svg"
                }
              />
              <Comment.Author as="a">{message.username}</Comment.Author>
              <Comment.Text>{message.content}</Comment.Text>
            </Comment>
          );
        })}
      </Comment.Group>
    );
  }
}

export default ChatElement;
