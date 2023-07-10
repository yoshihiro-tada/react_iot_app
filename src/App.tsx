import React from 'react';
import Header from './components/Templates/Header/Header';
import Top from './components/Templates/Main/Top/Top';
import Footer from './components/Templates/Footer/Footer';
import './App.css';

import { BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/setting" element={<Setting/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

/*
function Top() {
  return <h2>新着情報</h2>;
}
*/

function Login() {
  return <h2>ログイン</h2>;
}

function Location() {
  return <h2>ロケーション</h2>;
}

function Notice() {
  return <h2>通知一覧</h2>;
}

function Setting() {
  return <h2>設定</h2>;
}

export default App;
