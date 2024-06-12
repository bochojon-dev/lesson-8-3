import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
const App = lazy(() => import("./App"));
import loading from "./components/lazy-loading/LazyLoading";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
