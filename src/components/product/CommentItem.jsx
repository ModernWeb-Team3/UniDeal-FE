import styled from 'styled-components';
import CommentSvg from '@/assets/reply.svg?react';
import MoreSvg from '@/assets/kebab.svg?react';
import ReplyArrow from '@/assets/reply_arrow.svg?react';
import { Text } from '@/components/product/ProductDetailCard';

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
  color: ${({ $dimmed }) => ($dimmed ? '#bdbdbd' : '#000')};
`;

const IconGroup = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const ReplyWrapper = styled.div`
  margin-left: 16px;
  padding-top: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const CommentItem = ({ comment, currentUserId, postOwnerId, setReplyTo, replyTo }) => {
  const isAuthor = comment.authorId === currentUserId;
  const canViewSecret = !comment.isSecret || isAuthor || postOwnerId === currentUserId;

  return (
    <div>
      <Wrapper>
        <Row>
          <Text size="sm" weight="600">
            {comment.nickname}
          </Text>
          <IconGroup>
            <CommentSvg onClick={() => setReplyTo(comment.id)} style={{ cursor: 'pointer' }} />
            {isAuthor && <MoreSvg style={{ cursor: 'pointer' }} />}
          </IconGroup>
        </Row>
        <Content $dimmed={comment.isSecret && !canViewSecret}>
          {comment.isSecret && !canViewSecret ? '( 비밀글입니다 )' : comment.content}
        </Content>
        {replyTo === comment.id && (
          <ReplyWrapper>
            <ReplyArrow />
            <Text size="sm">대댓글</Text>
          </ReplyWrapper>
        )}
      </Wrapper>

      {comment.replies?.map((reply) => {
        const isReplyAuthor = reply.authorId === currentUserId;
        const canViewReply = !reply.isSecret || isReplyAuthor || postOwnerId === currentUserId;

        return (
          <Wrapper key={reply.id} style={{ paddingLeft: '20px' }}>
            <Row>
              <Text size="sm" weight="600">
                {reply.nickname}
              </Text>
              <IconGroup>{isReplyAuthor && <MoreSvg style={{ cursor: 'pointer' }} />}</IconGroup>
            </Row>
            <Content $dimmed={reply.isSecret && !canViewReply}>
              {reply.isSecret && !canViewReply ? '( 비밀글입니다 )' : reply.content}
            </Content>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default CommentItem;
