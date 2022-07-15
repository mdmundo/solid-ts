/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";
import { Provider as Global } from "./Global";
import Theme from "./Theme";

render(
  () => (
    <Global>
      <Theme>
        <App />
      </Theme>
    </Global>
  ),
  document.getElementById("root") as HTMLElement
);
