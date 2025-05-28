import styled from 'styled-components';
import { useState } from 'react';
import Button from '@/components/common/Button/Button';
import Form from '../../components/product/Form';
import ImgUpload from '../../components/product/ImgUpload';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const ProductCreate = () => {
  const [productData, setProductData] = useState({
    name: '',
    detail: '',
    price: '',
    category: '',
    location: '',
    status: 'ON_SALE', // TODO: 서버 확인 후 값 변경 가능성o
    imageList: [],
  });

  return (
    <Container>
      <ImgUpload />
      <Form productData={productData} setProductData={setProductData} />
      <Button fullWidth>상품 등록하기</Button>
    </Container>
  );
};
export default ProductCreate;
