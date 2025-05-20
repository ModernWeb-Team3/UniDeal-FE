import { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '@/assets/logo.svg';
import LoginModal from '@/components/LoginModal'; // 로그인 모달 컴포넌트 추가

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
  width: 180px;
  margin-bottom: 24px;
  margin-top: 80px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #444;
  margin: 6px 0;
  line-height: 1.5;
`;

const HighlightText = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || 'black'};
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  border: ${(props) => (props.outlined ? '1.5px solid #007bff' : 'none')};
  background-color: ${(props) => (props.outlined ? '#fff' : '#007bff')};
  color: ${(props) => (props.outlined ? '#007bff' : '#fff')};
  margin-top: 12px;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;

const EntryPage = () => {
  const [loginOpen, setLoginOpen] = useState(false); // 🔑 로그인 모달 상태

  return (
    <>
      <Container>
        <Logo src={LogoImage} alt="UniDeal 로고" />
        <Subtitle>가천대 학생들을 위한 중고 거래 플랫폼</Subtitle>
        <Subtitle>
          캠퍼스 안에서{' '}
          <HighlightText color="#12CE66">빠르고 </HighlightText>
          <HighlightText color="#2E8EFF">안전하게</HighlightText>

        </Subtitle>

        <Button onClick={() => window.location.href = '/signup'} style={{ marginTop: '200px' }}>
          회원가입
        </Button>
        <Button outlined onClick={() => setLoginOpen(true)} style={{ marginBottom: '80px' }}>
          로그인
        </Button>
      </Container>

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  );
};

export default EntryPage;
