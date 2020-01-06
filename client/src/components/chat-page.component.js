import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import axios from "axios";

import UserInput from "./chat-input.compoent";
import ChatElement from "./chat-element.component";

import "./chat-page.css";

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/messages/")
      .then(resJson => {
        console.log(resJson);

        this.setState({
          messages: resJson
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Header as="h1">CHAT APP:</Header>
        </Grid.Column>

        <Grid.Column width={8}>
          <Grid.Row className="message-area">
            <ChatElement />
          </Grid.Row>
          <Grid.Row>
            <UserInput />
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={4} />
      </Grid>
    );
  }
}

export default ChatPage;
