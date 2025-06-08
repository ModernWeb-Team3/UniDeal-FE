import { useEffect, useState } from 'react';
import CommentList from '@/components/product/CommentList';
import CommentInput from '@/components/product/CommentInput';
import Header from '@/components/common/Header';

const ProductInquiry = () => {
  const [comments, setComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null);

  const currentUserId = 4; // 로그인된 유저 ID
  const postOwnerId = 3; // 게시물 작성자 ID

  useEffect(() => {
    setComments([
      {
        id: 1,
        authorId: 1,
        nickname: '무당이',
        content: '7000원에 거래 안될까요..?',
        isSecret: false,
      },
      {
        id: 2,
        authorId: 2,
        nickname: '호호야',
        content: '비밀댓글ㄹㄹ',
        isSecret: true,
      },
    ]);
  }, []);

  const handleAddComment = (commentData) => {
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        authorId: currentUserId,
        nickname: '무한이',
        ...commentData,
      },
    ]);
  };

  const handleAddReply = (parentId, replyData) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: [
                ...(comment.replies || []),
                {
                  id: Date.now(),
                  authorId: currentUserId,
                  nickname: '무한이',
                  ...replyData,
                },
              ],
            }
          : comment,
      ),
    );
    setReplyTo(null);
  };

  const handleDelete = (commentId) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  const handleSubmit = ({ content, isSecret }) => {
    if (!content.trim()) return;
    if (replyTo) {
      handleAddReply(replyTo, { content, isSecret });
    } else {
      handleAddComment({ content, isSecret });
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '95vh', padding: '15px' }}>
        <div style={{ flex: 1 }}>
          <CommentList
            comments={comments}
            currentUserId={currentUserId}
            postOwnerId={postOwnerId}
            replyTo={replyTo}
            setReplyTo={setReplyTo}
            onDelete={handleDelete}
          />
        </div>
        <CommentInput onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default ProductInquiry;
