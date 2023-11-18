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

import { BrowserRouter, Routes,  Route} from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
        <Routes>
          {/* PrivateRoute ※ログインしていないときは登録ページ(/signup)へ飛ばす */}
          <Route path='/' element={<PrivateRoute/>}>
            <Route path='/' element={<Top/>}/>
          </Route>
          <Route path='/details' element={<PrivateRoute/>}>
            <Route path='/details' element={<Details/>}/>
          </Route>
          <Route path='/location' element={<PrivateRoute/>}>
            <Route path='/location' element={<Location/>}/>
          </Route>
          <Route path='/notice' element={<PrivateRoute/>}>
            <Route path='/notice' element={<Notice/>}/>
          </Route>
          <Route path='/setting' element={<PrivateRoute/>}>
            <Route path='/setting' element={<Setting/>}/>
          </Route>
          <Route path='/*' element={<PrivateRoute/>}>
            <Route path='/*' element={<NotFound/>}/>
          </Route>
          {/* PublicRoute ※ログインしているときはルート(/)へ飛ばす */}
          <Route path='/signup' element={<PublicRoute/>}>
            <Route path='/signup' element={<SignUp/>}/>
          </Route>
          <Route path='/login' element={<PublicRoute/>}>
            <Route path='/login' element={<Login/>}/>
          </Route>
          {/* 通常 */}
          <Route path='/details' element={<Details/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/notice' element={<Notice/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;