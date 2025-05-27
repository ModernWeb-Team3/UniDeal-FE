import styled from 'styled-components';
import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import Form from '../../components/product/Form';
import Status from '../../components/product/Status';
import ImgUpload from '../../components/product/ImgUpload';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const ProductEdit = () => {
  const [isSelling, setIsSelling] = useState(true);

  return (
    <Container>
      <ImgUpload />
      <Status isSelling={isSelling} setIsSelling={setIsSelling} />
      <Form />
      <Button fullWidth>상품 수정하기</Button>
    </Container>
  );
};
export default ProductEdit;
