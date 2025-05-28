import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

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
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 70px;
`;

const Subtitle2 = styled.p`
  font-size: 13px;
  margin-top: 60px;
  margin-bottom: 10px;
  padding-left: 5px;
`;

const EmailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

const EmailInput = styled(Input)`
  flex: 1;
`;

const FixedDomain = styled.span`
  font-size: 14px;
  color: #555;
`;

const ErrorText = styled.p`
  font-size: 13px;
  color: #e53935;
  margin: 4px 0 10px;
`;

function Signup() {
  const [email, setEmail] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [codeError, setCodeError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    let timer = null;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);

  const isGachonEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+$/.test(email);

  const fullEmail = `${email}@gachon.ac.kr`;

  const generateCode = () => {
    if (!isGachonEmail(email)) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      return;
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setAuthCode(code);
    setIsCodeSent(true);
    setEmailError('');
    alert(`(가상) 이메일로 전송된 인증번호: ${code}`);

    setTimeLeft(300);
    setTimerActive(true);
  };

  const verifyCode = () => {
    if (inputCode.trim() === authCode) {
      setCodeError('');
      navigate('/signup/complete', { state: { email: fullEmail } });
    } else {
      setCodeError('인증번호가 일치하지 않습니다.');
    }
  };

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const s = (sec % 60).toString().padStart(2, '0');
    return `${min}:${s}`;
  };

  return (
    <Container>
      <Title>UniDeal에 오신 것을</Title>
      <Title>환영합니다!</Title>
      <Subtitle>가천대학교 이메일로 인증할게요</Subtitle>

      <Subtitle2>이메일</Subtitle2>
      <EmailRow>
        <EmailInput
          type="text"
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FixedDomain>@gachon.ac.kr</FixedDomain>
      </EmailRow>
      {emailError && <ErrorText>{emailError}</ErrorText>} {/* ✅ 이메일 에러 */}

   <Button
   variant="primary"
   size="lg"
   fullWidth
    onClick={generateCode}
   disabled={!email} // ✅ timerActive 조건 제거
   style={{ marginTop: '20px' }}
  >
   {isCodeSent && timeLeft > 0
     ? `인증번호 다시 받기 (${formatTime(timeLeft)})`
     : '인증 번호 받기'}
  </Button>

      <Subtitle2>인증번호</Subtitle2>
      <Input
        type="text"
        placeholder="인증번호를 입력해주세요"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        maxLength={6}
        style={{ marginTop: '5px' }}
      />
      {codeError && <ErrorText>{codeError}</ErrorText>} {/* ✅ 인증번호 에러 */}

      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={verifyCode}
        disabled={!inputCode}
        style={{ marginTop: '20px', marginBottom: '150px' }}

      >
        인증 확인
      </Button>
    </Container>
  );
}

export default Signup;
