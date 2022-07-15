import { Component, createSignal } from "solid-js";
import Container from "@suid/material/Container";
import Paper from "@suid/material/Paper";
import Grid from "@suid/material/Grid";
import Button from "@suid/material/Button";
import Typography from "@suid/material/Typography";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <Container maxWidth="sm">
      <Paper elevation={24} sx={{ p: 2, my: 3 }}>
        <Grid container direction="row" justifyContent="space-around" alignItems="center">
          <Button
            variant="contained"
            onClick={() => {
              setCount(count() + 1);
            }}
          >
            Aumentar
          </Button>
          <Typography variant="h4">{count}</Typography>
          <Button
            variant="contained"
            onClick={() => {
              setCount(count() - 1);
            }}
          >
            Diminuir
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
