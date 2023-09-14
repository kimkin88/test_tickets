import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { CurrentDataProvider } from "./providers/DataProvider";
import { CurrentCurProvider } from "./providers/CurProvider";
import { GlobalStyle } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentDataProvider>
    <CurrentCurProvider>
      <GlobalStyle />
      <App />
    </CurrentCurProvider>
  </CurrentDataProvider>
);
