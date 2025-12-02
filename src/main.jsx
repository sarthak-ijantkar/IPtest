import ReactDOM from "react-dom/client";
import App from "./App";
import Ping from "./Ping";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ping" element={<Ping />} />
    </Routes>
  </BrowserRouter>
);
