import { useState } from 'react';
import styled from 'styled-components';
import SendSvg from '@/assets/send.svg?react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 30px;
  padding: 10px;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  outline: none;
  background-color: transparent;
`;

const SecretToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ $isActive, theme }) => ($isActive ? theme.COLORS.primary : '#fff')};
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 400)};
  cursor: pointer;
  gap: 4px;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.COLORS.primary : '#fff')};
`;

const CommentInput = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit({ content: trimmed, isSecret });
    setValue('');
    setIsSecret(false);
  };

  return (
    <Wrapper>
      <SecretToggle $isActive={isSecret} onClick={() => setIsSecret(!isSecret)}>
        <Circle $isActive={isSecret} />
        비밀
      </SecretToggle>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        placeholder="댓글을 입력하세요"
      />
      <SendSvg onClick={handleSubmit} style={{ cursor: 'pointer' }} />
    </Wrapper>
  );
};

export default CommentInput;
