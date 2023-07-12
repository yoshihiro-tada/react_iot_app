import React from 'react';
import Header from './components/Templates/Header';
import Top from './components/Templates/Main/Top';
import Location from './components/Templates/Main/Location';
import Footer from './components/Templates/Footer';
import './App.css';

import { BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Top/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/notice" element={<Notice/>} />
          <Route path="/setting" element={<Setting/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

function Login() {
  return <h2>ログイン</h2>;
}

function Notice() {
  return <h2>通知一覧</h2>;
}

function Setting() {
  return <h2>設定</h2>;
}

export default App;
