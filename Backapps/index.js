// index.js

const express = require('express'); // express 선언은 한 번만 있어야 합니다.
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 기본 라우팅
app.get('/', (req, res) => {
  res.send('Hello, this is the backend server!');
});

// 회원가입 라우트
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  res.status(200).json({ message: 'User registered successfully!' });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
