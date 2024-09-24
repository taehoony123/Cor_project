import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // 필요한 스타일

function Home({ isLoggedIn }) {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 로그인 버튼 클릭 시 로그인 페이지로 이동
  const handleLogin = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  // 홈페이지 둘러보기 기능
  const handleBrowse = () => {
    navigate('/browse'); // 홈페이지 둘러보기 페이지로 이동
  };

  return (
    <div className="home-container">
      <h1>Welcome to FACE RECO</h1>
      <p>Please log in to access your files or upload videos.</p>
      <div className="button-container">
        {!isLoggedIn && <button onClick={handleLogin} className="login-button">Log In</button>}
        {!isLoggedIn && <button onClick={handleBrowse} className="browse-button">Browse Homepage</button>}
      </div>
    </div>
  );
}

export default Home;
