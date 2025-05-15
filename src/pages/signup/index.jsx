import { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../component/common/Input.jsx";

function Signup() {
  const [email, setEmail] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);         // 타이머 시간 상태
  const [timerActive, setTimerActive] = useState(false); // 타이머 활성화 여부

  // 타이머 효과
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

    return () => clearInterval(timer); // cleanup
  }, [timerActive, timeLeft]);

  // 가천대학교 이메일인지 확인하는 함수
  const isGachonEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gachon\.ac\.kr$/.test(email);
  };

  // 인증번호 생성 함수
  const generateCode = () => {
    if (!isGachonEmail(email)) {
      setError("이메일 주소가 유효하지 않습니다");
      return;
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6자리 숫자
    setGeneratedCode(code);
    setIsCodeSent(true);
    setError("");
    alert(`(가상) 이메일로 전송된 인증번호: ${code}`); // 실제로는 이메일로 보내야 함

    setTimeLeft(180);       // 3분
    setTimerActive(true);   // 타이머 시작
  };

  // 인증번호 확인 함수
  const verifyCode = () => {
    if (codeInput === generatedCode) {
      setIsVerified(true);
      setError("");
    } else {
      setError("인증번호가 일치하지 않습니다.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>회원가입</h2>
      <br />
      <h2>이메일 인증</h2>

      <Input
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={generateCode}>인증번호 보내기</button>

      {isCodeSent && (
        <>
          <Input
            type="text"
            placeholder="인증번호 입력"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
            maxLength={6}
          />
          <button onClick={verifyCode}>인증 확인</button>
          {timeLeft > 0 && (
            <p>남은 시간: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}</p>
          )}
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {isVerified && (
        <div>
          <p style={{ color: "green" }}>✅ 인증이 완료되었습니다!</p>
          {/* 이후 입력 필드 추가 가능 (비밀번호, 닉네임 등) */}
        </div>
      )}
    </div>
  );
}

export default Signup;
