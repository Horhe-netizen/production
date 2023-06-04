import {ThemeProvider} from "@src/app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

import { render } from "react-dom";
import "@src/shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
) 