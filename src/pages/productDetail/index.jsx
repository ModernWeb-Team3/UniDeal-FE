import Button from '@/components/common/Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
`;

const ProductDetail = () => {
  return (
    <Wrapper>
      <Button>로그인하기</Button>
      <Button variant="primary" size="lg" fullWidth>
        로그인하기
      </Button>
      <Button variant="secondary" size="md">
        로그인하기
      </Button>
      <Button variant="primary" size="sm" rounded="full">
        글쓰기
      </Button>
    </Wrapper>
  );
};

export default ProductDetail;
