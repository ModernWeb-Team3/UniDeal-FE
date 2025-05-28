import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 2px solid #bdbdbd;
  border-radius: 3px;
  resize: none;
  outline: none;
  padding: 10px;
`;

const Textarea = ({ value, onChange, placeholder }) => {
  return <StyledTextarea value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Textarea;
