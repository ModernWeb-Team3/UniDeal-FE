import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailCard from '@/components/product/ProductDetailCard';
import Button from '@/components/common/Button/Button';
import styled from 'styled-components';
import { useState } from 'react';
import Header from '@/components/common/Header';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  padding: 30px;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const nav = useNavigate();

  // 추후 api 연결하면서 수정
  // const isOwner = product.sellerId === userId;
  const isOwner = true; // 임시로 true로 설정

  const handleEdit = () => {
    nav(`/product/${id}/edit`);
  };

  const handleInquiry = () => {
    nav(`/product/${id}/inquiry`);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div style={{ flex: 1 }}>
          <ProductDetailCard productId={id} />
        </div>
        {isOwner ? (
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button variant="secondary" fullWidth onClick={handleInquiry}>
              문의 확인하기
            </Button>
            <Button fullWidth onClick={handleEdit}>
              상품 수정하기
            </Button>
          </div>
        ) : (
          <Button fullWidth onClick={handleInquiry}>
            상품 문의하기
          </Button>
        )}
      </Wrapper>
    </>
  );
};

export default ProductDetail;