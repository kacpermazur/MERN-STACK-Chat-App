import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import UserInput from "./chat-input.compoent";
import ChatElement from "./chat-element.component";

import "./chat-page.css";

import openSocket from "socket.io-client";

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      socket: openSocket("http://localhost:8080")
    };

    this.state.socket.on("new-msg", message => {
      let currMessages = this.state.messages;
      currMessages.push(message);
      this.setState({
        messages: currMessages
      });
    });
  }

  componentDidMount() {
    fetch("http://localhost:8080/messages/", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          messages: resJson
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmit = (username, content) => {
    let reqBody = {
      username: username,
      content: content
    };

    fetch("http://localhost:8080/messages/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        console.log(resJson);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Header as="h1">CHAT APP:</Header>
        </Grid.Column>

        <Grid.Column width={8}>
          <Grid.Row className="message-area">
            {this.state.messages.length > 0 ? (
              <ChatElement messages={this.state.messages} />
            ) : (
              <div />
            )}
          </Grid.Row>
          <Grid.Row>
            <UserInput onSubmit={this.onSubmit} />
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={4} />
      </Grid>
    );
  }
}

export default ChatPage;
