import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button/Button';
import LogoImage from '@/assets/logo.svg';

// 🔲 전체 어두운 배경
const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 🔳 모달 박스
const ModalContainer = styled.div`
  background-color: #fff;
  padding: 32px 24px;
  border-radius: 16px;
  width: 300px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  position: relative;
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

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export default function LoginModal({ onClose }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (!email.includes('@gachon.ac.kr')) {
      setError('올바른 이메일 형식이 아닙니다.');
      return;
    }

    // TODO: 로그인 API 호출

    onClose();         // 모달 닫기
    navigate('/home'); // 홈으로 이동
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
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
      </ModalContainer>
    </Overlay>
  );
}
