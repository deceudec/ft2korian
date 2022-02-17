import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from "./Routes/main/Main.js";
import Dashboard from "./Routes/dashboard/dashboard";
import App from "./App.js"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <App />
    <Routes>
    <Route path="/" exact element={<Main />} />
    <Route path="dashboard" element={<Dashboard />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);