import styled from 'styled-components';
import CommentSvg from '@/assets/reply.svg?react';
import MoreSvg from '@/assets/kebab.svg?react';
import { Text } from '@/components/product/ProductDetailCard';
import { useState } from 'react';

const Wrapper = styled.div`
  padding: 12px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #000;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Content = styled.div`
  padding: 8px 0px 8px 10px;
  font-size: 14px;
  color: ${({ dimmed }) => (dimmed ? '#bdbdbd' : '#000')};
`;

const IconGroup = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const CommentItem = ({ comment, currentUserId, postOwnerId }) => {
  const isAuthor = comment.authorId === currentUserId;
  const canViewSecret = !comment.isSecret || isAuthor || postOwnerId === currentUserId;
  const [isReplying, setIsReplying] = useState(false);

  return (
    <Wrapper>
      <Row>
        <Text size="sm" weight="600">
          {comment.nickname}
        </Text>
        <IconGroup>
          <CommentSvg
            onClick={() => setIsReplying((prev) => !prev)}
            style={{ cursor: 'pointer' }}
          />
          {isAuthor && <MoreSvg style={{ cursor: 'pointer' }} />}
        </IconGroup>
      </Row>
      <Content dimmed={comment.isSecret && !canViewSecret}>
        {comment.isSecret && !canViewSecret ? '( 비밀글입니다 )' : comment.content}
      </Content>
    </Wrapper>
  );
};

export default CommentItem;
