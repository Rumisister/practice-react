import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./EventHandle/App";
import App from "./App";
import DOM from "./DOM/App";
import IterationSample from "./RepeatComponents/App";
import LifeCycleSample from "./LifeCycleSample/App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/DOM" element={<DOM />} />
        <Route path="/IterationSample" element={<IterationSample />} />
        <Route path="/LifeCycleSample" element={<LifeCycleSample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
