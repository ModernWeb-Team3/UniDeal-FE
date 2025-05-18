import { useParams } from 'react-router-dom';
import ProductDetailCard from '@/components/product/detail/ProductDetailCard';
import Button from '@/components/common/Button/Button';
import styled from 'styled-components';
import { useState } from 'react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // 추후 api 연결하면서 수정
  // const isOwner = product.sellerId === userId;
  const isOwner = true; // 임시로 true로 설정

  return (
    <Wrapper>
      <div style={{ flex: 1 }}>
        <ProductDetailCard productId={id} />
      </div>
      {isOwner ? (
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button variant="secondary" fullWidth>
            문의 확인하기
          </Button>
          <Button fullWidth>상품 수정하기</Button>
        </div>
      ) : (
        <Button fullWidth>상품 문의하기</Button>
      )}
    </Wrapper>
  );
};

export default ProductDetail;
