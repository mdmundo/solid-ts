import Paper from "@suid/material/Paper";
import { ParentProps } from "solid-js";

const Basic = ({ children }: ParentProps) => {
  return (
    <Paper elevation={24} sx={{ p: 2, my: 3 }}>
      {children}
    </Paper>
  );
};

export default Basic;
