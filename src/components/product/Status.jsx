import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const ForSale = styled.div`
  color: ${(props) => (props.$status === 'ON_SALE' ? '#12CE66' : '#999')};
  cursor: pointer;
`;

const SoldOut = styled.div`
  color: ${(props) => (props.$status === 'SOLD_OUT' ? '#FF4949' : '#999')};
  cursor: pointer;
`;

const Status = ({ status, setStatus }) => {
  return (
    <Container>
      <ForSale $status={status} onClick={() => setStatus('ON_SALE')}>
        ● 판매 중
      </ForSale>
      <SoldOut $status={status} onClick={() => setStatus('SOLD_OUT')}>
        ● 판매 완료
      </SoldOut>
    </Container>
  );
};

export default Status;
