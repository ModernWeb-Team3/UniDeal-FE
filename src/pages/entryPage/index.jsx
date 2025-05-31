import { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '@/assets/logo2.svg';
import LoginModal from '@/pages/loginModal/LoginModal';
import Button from '@/components/common/Button/Button';

const EntryPage = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <Wrapper>
      <Content>
        <Logo src={LogoImage} alt="UniDeal 로고" />
        <Subtitle>가천대 학생들을 위한 중고 거래 플랫폼</Subtitle>
        <Subtitle>
          캠퍼스 안에서 <HighlightText color="#12CE66">빠르고 </HighlightText>
          <HighlightText color="#2E8EFF">안전하게</HighlightText>
        </Subtitle>

        <ButtonGroup>
          <StyledButton
            fullWidth
            size="lg"
            onClick={() => (window.location.href = '/signup')}
            style={{ marginBottom: '12px' }}
          >
            회원가입
          </StyledButton>
          <StyledButton
            fullWidth
            size="lg"
            variant="secondary"
            textColor="#2E8EFF"
            borderColor="#2E8EFF"
            onClick={() => setLoginOpen(true)}
          >
            로그인
          </StyledButton>
        </ButtonGroup>
      </Content>

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </Wrapper>
  );
};

export default EntryPage;

// ------- Styled Components ---------

const Wrapper = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 40px 16px;
  text-align: center;
  flex: 1;
`;

const Logo = styled.img`
  width: 280px;
  margin-top: 200px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #444;
  margin: 6px 0;
  line-height: 1.5;
`;

const HighlightText = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || 'black'};
`;

const ButtonGroup = styled.div`
  margin-top: 180px;
  max-width: 330px;
  margin-inline: auto;
`;

// 버튼 스타일 통일
const StyledButton = styled(Button)`
  border-radius: 12px !important;
  font-weight: 500;
  height: 48px;
`;
