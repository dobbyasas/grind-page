import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from "react";
import quotes from "./banners/quotes.json";
import Home from "./pages/home/Home"
import Editor from './pages/editor/Editor';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/editor' element={<Editor />}/>
    </Routes>
  );
}

export default App
