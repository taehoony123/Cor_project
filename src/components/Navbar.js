import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그인 상태를 false로 변경
    navigate('/'); // 로그아웃 후 홈 화면으로 이동
  };

  return (
    <header className="navbar">
      {/* Face Reco 클릭 시 browse 페이지로 이동 */}
      <Link to="/browse" className="logo">FACE RECO</Link>
      <nav className="nav-links">
        <Link to="/newfile">NEW FILE</Link>
        <Link to="/processfile">PROCESS FILE</Link>
        <Link to="/mypage">MY PAGE</Link>
        {!isLoggedIn && <Link to="/login" className="login">로그인</Link>}
        {isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>
            로그아웃
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
