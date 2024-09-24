import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // 회원가입 로직 처리 후
    if (password === confirmPassword) {
      // 예시로 로그인 화면으로 이동
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form">
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
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input 
            type="password" 
            id="confirm-password" 
            placeholder="Confirm your password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="button" className="signup-button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
