import Button from "@suid/material/Button";
import Grid from "@suid/material/Grid";
import Typography from "@suid/material/Typography";
import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);

  return (
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
  );
};

export default Counter;
