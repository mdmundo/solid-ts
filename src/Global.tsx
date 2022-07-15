import { Accessor, createContext, createSignal, ParentProps, Setter } from "solid-js";
import useMediaQuery from "@suid/material/useMediaQuery";

type PaletteMode = "light" | "dark" | undefined;

interface IGlobal {
  mode: Accessor<PaletteMode>;
  setMode: Setter<PaletteMode>;
}

const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
const [mode, setMode] = createSignal<PaletteMode>(prefersDarkMode() ? "dark" : "light");
export const Global = createContext<IGlobal>({ mode, setMode });

export const Provider = ({ children }: ParentProps) => {
  return <Global.Provider value={{ mode, setMode }}>{children}</Global.Provider>;
};
