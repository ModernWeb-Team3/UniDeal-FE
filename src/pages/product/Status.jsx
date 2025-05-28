import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const ForSale = styled.div`
  color: ${(props) => (props.$isSelling ? '#12CE66' : '#999')};
  cursor: pointer;
`;

const SoldOut = styled.div`
  color: ${(props) => (!props.$isSelling ? '#FF4949' : '#999')};
  cursor: pointer;
`;

const Status = ({ isSelling, setIsSelling }) => {
  return (
    <Container>
      <ForSale $isSelling={isSelling} onClick={() => setIsSelling(true)}>
        ● 판매 중
      </ForSale>
      <SoldOut $isSelling={isSelling} onClick={() => setIsSelling(false)}>
        ● 판매 완료
      </SoldOut>
    </Container>
  );
};

export default Status;
