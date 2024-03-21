import React from 'react';  
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import {Home} from './pages/Home/Home';
import {Login} from './pages/Login/Login';
import {Projects} from './pages/Projects/Projects';
import {Skills} from './pages/Skills/Skills';
import {Contact} from './pages/Contact/Contact';

const routes = 
[
  {Path: '/Home', element: <Home />},
  {Path: '/Login', element: <Login />},
  {Path: '/Projects', element: <Projects />},
  {Path: '/Skills', element: <Skills />},
  {Path: '/Contact', element: <Contact />}
 ];

// <Route path="/Home" element={<Home />} />

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.Path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
