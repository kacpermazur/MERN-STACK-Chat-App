import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import UserInput from "./chat-input.compoent";

class ChatPage extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Header as="h1">CHAT APP:</Header>
        </Grid.Column>

        <Grid.Column width={8}>
          <Grid.Row className="message-container">Messages Here</Grid.Row>
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
