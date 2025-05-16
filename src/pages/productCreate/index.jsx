import styled from 'styled-components';

import Button from '@/components/common/Button/Button';
import Form from '../product/Form';
import ImgUpload from '../product/ImgUpload';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const ProductCreate = () => {
  return (
    <Container>
      <ImgUpload />
      <Form />
      <Button fullWidth>상품 등록하기</Button>
    </Container>
  );
};
export default ProductCreate;
