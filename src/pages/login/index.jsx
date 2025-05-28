import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button/Button';
import LogoImage from '@/assets/logo.svg';

const Container = styled.div`
  max-width: 330px;
  margin: 100px auto;
  padding: 32px 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const Logo = styled.img`
  width: 160px;
  margin-bottom: 24px;
`;

const Label = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
  text-align: left;
`;

const ErrorText = styled.p`
  font-size: 13px;
  color: #e53935;
  margin: 8px 0;
`;

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // 기본 유효성 검사
    if (!email || !password) {
      setError('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (!email.includes('@gachon.ac.kr')) {
      setError('올바른 이메일 형식이 아닙니다.');
      return;
    }

    // TODO: 로그인 API 호출 (백엔드 연동 시)

    // 로그인 성공 시
    navigate('/home');
  };

  return (
    <Container>
      <Logo src={LogoImage} alt="UniDeal 로고" />

      <Label>이메일</Label>
      <Input
        type="email"
        placeholder="qwer1234@gachon.ac.kr"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '16px' }}
      />

      <Label>비밀번호</Label>
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '8px' }}
      />

      {error && <ErrorText>{error}</ErrorText>}

      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: '16px' }}
      >
        로그인하기
      </Button>
    </Container>
  );
}
