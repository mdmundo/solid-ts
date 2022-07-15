import IconButton from "@suid/material/IconButton";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import { useContext } from "solid-js";
import { Global } from "./Global";
import DarkMode from "@suid/icons-material/DarkMode";
import LightMode from "@suid/icons-material/LightMode";

const Toggle = () => {
  const { mode, setMode } = useContext(Global);

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
      <IconButton
        color="primary"
        size="large"
        onClick={() => {
          setMode(mode() !== "light" ? "light" : "dark");
        }}
        children={mode() === "light" ? <LightMode /> : <DarkMode />}
      />
      <Typography variant="body1" children="Alternar a cor do tema entre claro e escuro." />
    </Stack>
  );
};

export default Toggle;
