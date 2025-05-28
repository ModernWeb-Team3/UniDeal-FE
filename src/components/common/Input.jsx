// src/components/common/Input.jsx
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

const Input = ({ type = "text", id, name, value, onChange, placeholder, ...rest }) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest} // 추가적인 props를 전달
    />
  );
};

export default Input;