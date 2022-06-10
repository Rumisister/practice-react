import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Event from "./EventHandle/App";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/Event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
