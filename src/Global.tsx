import { Accessor, createContext, createSignal, ParentProps, Setter } from "solid-js";
import useMediaQuery from "@suid/material/useMediaQuery";

type PalletteMode = "light" | "dark" | undefined;

interface IGlobal {
  mode?: Accessor<PalletteMode>;
  setMode?: Setter<string>;
}

export const Global = createContext<IGlobal>({});

export const Provider = ({ children }: ParentProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = createSignal<PalletteMode>(prefersDarkMode() ? "dark" : "light");

  return <Global.Provider value={{ mode, setMode }}>{children}</Global.Provider>;
};
