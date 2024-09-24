import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Browse.css'; // 스타일을 위한 CSS 파일

function Browse({ isLoggedIn }) { // 로그인 상태를 props로 전달받음
  const navigate = useNavigate();

  // 'Get Started' 버튼 클릭 시 동작
  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/newfile'); // 로그인 상태라면 newfile 페이지로 이동
    } else {
      navigate('/login'); // 로그인하지 않았다면 login 페이지로 이동
    }
  };

  return (
    <div className="browse-container">
      <header className="browse-header">
        <h1>Welcome to AI-Powered Facial De-identification</h1>
        <p>Your privacy, our priority. Upload your videos, and let our AI automatically de-identify faces to protect privacy.</p>
      </header>

      <section className="features-section">
        <div className="feature">
          <h2>Facial De-identification</h2>
          <p>Automatically detect and de-identify faces in videos, ensuring privacy for all individuals.</p>
          <img src="https://via.placeholder.com/150" alt="Before and After De-identification" />
        </div>
        <div className="feature">
          <h2>Easy Video Upload</h2>
          <p>Upload videos directly from your computer or drag-and-drop to start the de-identification process.</p>
          <img src="https://via.placeholder.com/150" alt="Video Upload" />
        </div>
        <div className="feature">
          <h2>Real-time Processing</h2>
          <p>Experience fast and secure de-identification, powered by cutting-edge AI technology.</p>
          <img src="https://via.placeholder.com/150" alt="AI Processing" />
        </div>
      </section>

      <section className="cta-section">
        <h2>Protect Privacy Today</h2>
        <p>Start using our AI facial de-identification service now and ensure privacy for everyone in your videos.</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </section>
    </div>
  );
}

export default Browse;
