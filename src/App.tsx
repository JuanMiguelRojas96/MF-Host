import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Sidebar from "./UI-Components/molecules/sidebar/Sidebar";
import { Admon, appRoutes } from "./routes";
import MainContentWrapper from "./UI-Components/templates/main-content/MainContent";

const App = () => (
  <BrowserRouter>
    <Sidebar routes={appRoutes} />
    <MainContentWrapper>
      <Routes>
        <Route path="/admon/*" element={<Admon />} />
      </Routes>
    </MainContentWrapper>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

export default App;