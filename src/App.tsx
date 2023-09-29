import React from 'react';
import Header from './components/Templates/Header';
import Top from './components/Templates/Main/Top';
import Details from './components/Templates/Main/Details';
import Location from './components/Templates/Main/Location';
import Notice from './components/Templates/Main/Notice';
import Setting from './components/Templates/Main/Setting';
import NotFound from './components/Templates/Main/NotFound';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Templates/Footer';
import './App.css';

import { BrowserRouter, Router,  Routes,  Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Top/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/notice" element={<Notice/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
