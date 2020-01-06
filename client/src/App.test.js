import React from "react";
import ReactDOM from "react-dom";
//import { render } from "@testing-library/react";
import ChatPage from "./components/chat-page.component";
import ChatInput from "./components/chat-input.compoent";
import ChatElement from "./components/chat-element.component";

it("Renders Chat Page Component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChatPage />, div);
});

it("Renders Chat Input Component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChatInput />, div);
});

it("Renders Chat Element Component without crashing", () => {
  const message = {
    username: "testUser",
    content: "this is a test msg"
  };

  const messages = [];
  messages.push(message);

  const div = document.createElement("div");
  ReactDOM.render(<ChatElement messages={messages} />, div);
});
