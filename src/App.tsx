import ReactDOM from "react-dom/client";
import Navbar from "navbar/Navbar";

const App = () => (
  <>
    <Navbar />
    <h1>Hola Mundo</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);