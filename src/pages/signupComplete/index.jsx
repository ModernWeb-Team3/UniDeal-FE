import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button/Button';
import CongratsImage from '@/assets/congratulate-2.svg';

const Container = styled.div`
  max-width: 330px;
  margin: 50px auto;
  padding: 32px 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 3px;
`;

const Label = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const ErrorText = styled.p`
  font-size: 13px;
  color: #e53935;
  margin: 4px 0 10px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
  width: 300px;
  text-align: center;
`;

export default function SignupComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false); // ✅ 모달 상태

  const handleSubmit = () => {
    if (!password || !nickname) {
      setError('모든 정보를 입력해주세요.');
      return;
    }

    // TODO: 회원가입 API 호출

    // ✅ 회원가입 완료 시 모달 열기
    setModalOpen(true);
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <>
      <Container>
        <Title>인증이 완료되었습니다</Title>
        <Subtitle>사용할 비밀번호와 닉네임을</Subtitle>
        <Subtitle>입력해주세요</Subtitle>
        <Subtitle>ㅤ</Subtitle>
        <Subtitle>ㅤ</Subtitle>
        <Subtitle>ㅤ</Subtitle>

        {email && (
          <>
            <Label>이메일</Label>
            <Input value={email} disabled style={{ marginBottom: '16px' }} />
          </>
        )}

        <Label>비밀번호</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '16px' }}
        />

        <Label>닉네임</Label>
        <Input
          type="text"
          placeholder="ex) 무한이"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={{ marginBottom: '200px' }}
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
          회원가입 완료
        </Button>
      </Container>

      {/* ✅ 회원가입 완료 모달 */}
      {modalOpen && (
        <ModalOverlay>
          <Modal>
            <img
                src={CongratsImage}
                alt="축하 이미지"
                style={{ width: 120, height: 120 }}
      />
            <p style={{ marginBottom: 30 , marginTop: 10}}>회원가입이 완료되었어요!</p>
            <Button onClick={goToLogin} fullWidth variant="primary">
              로그인 하러가기
            </Button>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
