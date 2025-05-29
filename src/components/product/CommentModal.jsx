import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 120px;
  overflow: hidden;
`;

const Option = styled.div`
  padding: 12px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  &:first-child {
    color: #615bff;
    border-bottom: 1px solid #ccc;
  }

  &:last-child {
    color: #ff4949;
  }

  &:hover {
    background-color: #ebebeb;
  }
`;

const CommentModal = ({ onEdit, onDelete, onClose, top = 0, left = 0 }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <ModalWrapper ref={modalRef} top={top} left={left}>
      <Option onClick={onEdit}>수정하기</Option>
      <Option onClick={onDelete}>삭제하기</Option>
    </ModalWrapper>
  );
};

export default CommentModal;
