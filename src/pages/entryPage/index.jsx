import { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '@/assets/logo2.svg';
import LoginModal from '@/pages/loginModal/LoginModal';
import Button from '@/components/common/Button/Button'; 

const Container = styled.div`
  max-width: 330px;
  margin: 50px auto;
  padding: 32px 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const Logo = styled.img`
  width: 210px;
  margin-bottom: 10px;
  margin-top: 200px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #444;
  margin: 6px 0;
  line-height: 1.5;
`;

const HighlightText = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || 'black'};
`;

const EntryPage = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Container>
        <Logo src={LogoImage} alt="UniDeal 로고" />
        <Subtitle>가천대 학생들을 위한 중고 거래 플랫폼</Subtitle>
        <Subtitle>캠퍼스 안에서 <HighlightText color="#12CE66">
          빠르고 </HighlightText>
        <HighlightText color="#2E8EFF">
          안전하게</HighlightText>
        </Subtitle>

        <Button
          fullWidth
          size="md"
          onClick={() => (window.location.href = '/signup')}
          style={{ marginTop: '180px' ,  marginBottom: '10px'}}
        >
          회원가입
        </Button>
        <Button
  size="lg"
  fullWidth
  textColor="#2E8EFF"
  borderColor="#2E8EFF"
  backgroundColor="#white"
  variant="secondary" // 버튼 색 변화화
  onClick={() => setLoginOpen(true)} 
>
  로그인
</Button>
      </Container>

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  );
};

export default EntryPage;
