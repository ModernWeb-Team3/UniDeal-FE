import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackArrow from '@/assets/back_arrow.svg?react';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
`;

const Side = styled.div`
  display: flex;
  align-items: center;
  min-width: 50px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

const Header = ({ title, right }) => {
  const nav = useNavigate();

  return (
    <HeaderWrapper>
      <Side onClick={() => nav(-1)} style={{ cursor: 'pointer' }}>
        <BackArrow />
      </Side>
      <Center>{title || ''}</Center>
      <Side>{right || null}</Side>
    </HeaderWrapper>
  );
};

export default Header;
