import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NewFile from './components/NewFile';
import ProcessFile from './components/ProcessFile';
import MyPage from './components/MyPage';
import Login from './components/Login';
import SignUp from './components/SignUp'; // 회원가입 페이지 추가
import Home from './components/Home';
import Browse from './components/Browse';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/browse" element={<Browse isLoggedIn={isLoggedIn} />} />
        <Route path="/newfile" element={isLoggedIn ? <NewFile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/processfile" element={isLoggedIn ? <ProcessFile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/mypage" element={isLoggedIn ? <MyPage /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} /> {/* 회원가입 경로 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
