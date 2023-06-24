import React from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/search/:term" element={<SearchPage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;
