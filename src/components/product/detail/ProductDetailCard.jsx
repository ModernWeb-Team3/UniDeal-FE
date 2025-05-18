import { faker } from '@faker-js/faker';
import styled, { css } from 'styled-components';
import LocationSvg from '@/assets/location.svg?react';
import CommentSvg from '@/assets/comment.svg?react';

const mockProduct = {
  id: 1,
  category: '책/서적',
  imageUrl: faker.image.urlLoremFlickr({ width: 300, height: 300 }),
  meetingLocation: 'AI공학관',
  commentCount: 5,
  title: '공룡책 팔아염',
  price: '10,000',
  seller: '야호호',
  description: `소웨 2학년 전공책 만원에 팔아요. 거의 새 책입니다 ~`,
  status: '판매완료', // 추후 컴포넌트로 수정
};

export const Text = styled.div`
  ${({ size, theme }) => css`
    font-size: ${theme.FONT_SIZE[size] || size || theme.FONT_SIZE.md};
  `}

  ${({ color, theme }) => css`
    color: ${theme.COLORS[color] || color || theme.COLORS.black};
  `}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProductDetailCard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <Text size="xs" color="primary" weight="600">
        {mockProduct.category}
      </Text>
      <ProductImage src={mockProduct.imageUrl} alt={mockProduct.title} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Flex>
          <LocationSvg />
          <Text size="sm">{mockProduct.meetingLocation}</Text>
        </Flex>
        <Flex>
          <CommentSvg />
          <Text size="sm">{mockProduct.commentCount}</Text>
        </Flex>
      </div>
      <Text size="lg">{mockProduct.title}</Text>
      <Text size="lg" weight="600">
        {mockProduct.price}원
      </Text>
      <Text size="xs">{mockProduct.seller}</Text>
      <Line />
      <Text size="sm">{mockProduct.description}</Text>
    </div>
  );
};

export default ProductDetailCard;
