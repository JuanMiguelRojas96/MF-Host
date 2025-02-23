import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import Sidebar from "./UI-Components/molecules/sidebar/Sidebar";
import { appRoutes } from "./routes";

const App = () => (
  <BrowserRouter>
    <Sidebar routes={appRoutes} />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);