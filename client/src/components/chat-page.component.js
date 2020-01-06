import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class ChatPage extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={4} />

        <Grid.Column width={8}>
          <Grid.Row className="message-container">Messages Here</Grid.Row>
        </Grid.Column>

        <Grid.Column width={4} />
      </Grid>
    );
  }
}

export default ChatPage;
