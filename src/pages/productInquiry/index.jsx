import { useEffect, useState } from 'react';
import CommentList from '@/components/product/CommentList';
import CommentInput from '@/components/product/CommentInput';
import Header from '@/components/common/Header';

const ProductInquiry = () => {
  const [comments, setComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null);

  const currentUserId = 1; // 로그인된 유저 ID
  const postOwnerId = 3; // 게시물 작성자 ID

  useEffect(() => {
    setComments([
      {
        id: 1,
        authorId: 1,
        nickname: '야호호',
        content: '문의드립니다.',
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
        nickname: '나',
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
                  nickname: '나',
                  ...replyData,
                },
              ],
            }
          : comment,
      ),
    );
    setReplyTo(null);
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
          />
        </div>
        <CommentInput onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default ProductInquiry;
