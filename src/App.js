import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, HistoryPage, HomePage, SearchPage } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/search/:term" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
