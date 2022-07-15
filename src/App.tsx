import { Component } from "solid-js";
import Container from "@suid/material/Container";
import Basic from "./Basic";
import Counter from "./Counter";
import Alerts from "./Alerts";

const App: Component = () => {
  return (
    <Container maxWidth="sm">
      <Basic children={<Counter />} />
      <Basic children={<Alerts />} />
    </Container>
  );
};

export default App;
