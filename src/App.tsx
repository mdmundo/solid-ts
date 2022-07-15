import { Component } from "solid-js";
import Container from "@suid/material/Container";
import Basic from "./Basic";
import Counter from "./Counter";
import Alerts from "./Alerts";
import Typing from "./Typing";
import Toggle from "./Toggle";

const App: Component = () => {
  return (
    <Container maxWidth="sm">
      <Basic children={<Counter />} />
      <Basic children={<Alerts />} />
      <Basic children={<Typing />} />
      <Basic children={<Toggle />} />
    </Container>
  );
};

export default App;
