import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";

export default function NavigationProvider() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
