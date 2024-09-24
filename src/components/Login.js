import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직 처리 후
    setIsLoggedIn(true);
    navigate('/browse'); // 로그인 후 Browse 페이지로 이동
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="button" className="login-button" onClick={handleLogin}>Log In</button>
        {/* 회원가입 링크 추가 */}
        <p className="signup-link">
          회원이 아니십니까? <Link to="/signup">회원가입</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
