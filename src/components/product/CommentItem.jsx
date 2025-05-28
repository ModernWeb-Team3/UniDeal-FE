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

const ReplyContent = styled(Content)`
  padding: 12px 0px 8px 30px;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const ReplyBlock = styled.div`
  padding-left: 12px;
  margin-top: 4px;
`;

const ReplyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CommentItem = ({ comment, currentUserId, postOwnerId, setReplyTo, replyTo }) => {
  const isAuthor = comment.authorId === currentUserId;
  const canViewSecret = !comment.isSecret || isAuthor || postOwnerId === currentUserId;

  const isReplying = replyTo === comment.id;

  return (
    <div>
      {/* 댓글 본문 */}
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
      </Wrapper>

      {isReplying && (
        <ReplyBlock>
          <ReplyArrow />
        </ReplyBlock>
      )}

      {/* 대댓글 목록 */}
      {comment.replies?.map((reply) => {
        const isReplyAuthor = reply.authorId === currentUserId;
        const canViewReply = !reply.isSecret || isReplyAuthor || postOwnerId === currentUserId;

        return (
          <Wrapper key={reply.id}>
            <ReplyBlock>
              <ReplyRow>
                <ReplyHeader>
                  <ReplyArrow />
                  <Text size="sm" weight="600">
                    {reply.nickname}
                  </Text>
                </ReplyHeader>
                {isReplyAuthor && <MoreSvg style={{ cursor: 'pointer' }} />}
              </ReplyRow>
              <ReplyContent $dimmed={reply.isSecret && !canViewReply}>
                {reply.isSecret && !canViewReply ? '( 비밀글입니다 )' : reply.content}
              </ReplyContent>
            </ReplyBlock>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default CommentItem;
