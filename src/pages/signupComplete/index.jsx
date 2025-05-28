import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button/Button';
import CongratsImage from '@/assets/congratulate.svg';

const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 30px 50px;
  flex: 1;
`;

const Title = styled.h2`
 margin-top: 50px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

const Label = styled.p`
  font-size: 13px;
  margin-top: 10spx;
  margin-bottom: 10px;
  padding-left: 0px;
`;

const ErrorText = styled.p`
  font-size: 13px;
  color: #e53935;
  margin: 6px 0 10px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px px;
  width: 300px;
  text-align: center;
  max-width: 360px; // 기존보다 조금 더 넓게
  padding: 28px 20px; // 좌우 여백 줄이기
`;

export default function SignupComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    if (!password || !nickname) {
      setError('모든 정보를 입력해주세요.');
      return;
    }

    // TODO: 회원가입 API 호출
    setModalOpen(true);
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <>
      <Wrapper>
        <Content>
          <Title>인증이 완료되었습니다</Title>
          <Subtitle>사용할 비밀번호와 닉네임을</Subtitle>
          <Subtitle>입력해주세요<br/><br/><br/></Subtitle>
   
          {email && (
            <>
              <Label>이메일</Label>
              <Input value={email} disabled style={{ marginBottom: '30px' , marginTop: '3px'}} />
            </>
          )}

          <Label>비밀번호</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '30px' }}
          />

          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder="ex) 무한이"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{ marginBottom: '180px' }}
          />

          {error && <ErrorText>{error}</ErrorText>}

          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleSubmit}
            disabled={!password || !nickname}
            style={{ marginBottom: '10px' }}
          >
            회원가입 진행하기
          </Button>
        </Content>
      </Wrapper>

      {modalOpen && (
        <ModalOverlay>
          <Modal>
            <img src={CongratsImage} alt="축하 이미지" style={{ width: 120, height: 120 }} />
            <p style={{ marginBottom: 30, marginTop: 10 }}>회원가입이 완료되었어요!</p>
            <Button onClick={goToLogin} fullWidth variant="primary">
              로그인 하러가기
            </Button>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
