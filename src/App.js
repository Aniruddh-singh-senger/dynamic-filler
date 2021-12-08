import React from 'react';
import UI from './UI';
import './App.css';
import { BrowserRouter,Routes } from 'react-router-dom';



function App() {

  return (
    <>
    <BrowserRouter >
      <UI />
      <Routes>
    
      </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
