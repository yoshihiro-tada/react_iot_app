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
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" Component={Top} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route path="/details" Component={Details} />
          <Route path="/login" Component={Login} />
          <Route path="/location" Component={Location} />
          <Route path="/notice" Component={Notice} />
          <Route path="/setting" Component={Setting} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;