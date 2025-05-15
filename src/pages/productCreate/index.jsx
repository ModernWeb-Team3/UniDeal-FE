import styled from 'styled-components';
import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import Form from '../product/Form';
import Status from '../product/Status';
import ImgUpload from '../product/ImgUpload';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const ProductCreate = () => {
  const [isSelling, setIsSelling] = useState(true);

  return (
    <Container>
      <ImgUpload />
      <Status isSelling={isSelling} setIsSelling={setIsSelling} />
      <Form />
      <Button fullWidth>상품 등록하기</Button>
    </Container>
  );
};
export default ProductCreate;
