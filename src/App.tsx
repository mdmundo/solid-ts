import { Component } from "solid-js";
import Container from "@suid/material/Container";
import Basic from "./Basic";
import Counter from "./Counter";

const App: Component = () => {
  return (
    <Container maxWidth="sm">
      <Basic children={<Counter />} />
    </Container>
  );
};

export default App;
