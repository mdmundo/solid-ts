import { createTheme, ThemeProvider } from "@suid/material";
import CssBaseline from "@suid/material/CssBaseline";
import { createMemo, ParentProps, useContext } from "solid-js";
import { Global } from "./Global";

const { mode } = useContext(Global);

const theme = createMemo(() => createTheme({ palette: { mode: mode() } }));

const Theme = ({ children }: ParentProps) => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
