import Alert, { AlertColor } from "@suid/material/Alert";
import Button from "@suid/material/Button";
import Grid from "@suid/material/Grid";
import Grow from "@suid/material/Grow";
import Stack from "@suid/material/Stack";
import { createSignal } from "solid-js";

interface TextColor {
  color: AlertColor;
  text: string;
}

const texts: Array<TextColor> = [
  { color: "success", text: "sucesso" },
  { color: "warning", text: "aviso" },
  { color: "error", text: "erro" },
  { color: "info", text: "informação" },
];

const Alerts = () => {
  const [active, setActive] = createSignal(false);
  const [text, setText] = createSignal(texts[0]);
  const close = (e: any) => {
    setActive(false);
  };
  const open = (index: number) => {
    setText(texts[index]);
    setActive(true);
  };

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
      <Grow in={active()} appear>
        <Alert severity={text().color} onClose={close} children={`Mensagem de ${text().text}!`} />
      </Grow>
      <Grid container direction="row" justifyContent="space-around" alignItems="center">
        <Button
          variant="text"
          color="success"
          onClick={() => {
            open(0);
          }}
        >
          Sucesso
        </Button>
        <Button
          variant="text"
          color="warning"
          onClick={() => {
            open(1);
          }}
        >
          Aviso
        </Button>
        <Button
          variant="text"
          color="error"
          onClick={() => {
            open(2);
          }}
        >
          Erro
        </Button>
        <Button
          variant="text"
          color="info"
          onClick={() => {
            open(3);
          }}
        >
          Info
        </Button>
      </Grid>
    </Stack>
  );
};

export default Alerts;
