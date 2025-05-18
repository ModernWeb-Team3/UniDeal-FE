import { useEffect, useState } from 'react';
import CommentList from '@/components/product/CommentList';
import CommentInput from '@/components/product/CommentInput';
import Header from '@/components/common/Header';

const ProductInquiry = () => {
  const [comments, setComments] = useState([]);
  const currentUserId = 1; // 로그인된 유저 ID
  const postOwnerId = 3; // 게시물 작성자 ID

  // 목데이터
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

  const handleNewComment = (newComment) => {
    const nextId = comments.length + 1;
    setComments([
      ...comments,
      {
        id: nextId,
        authorId: currentUserId,
        nickname: '나',
        ...newComment,
      },
    ]);
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
          />
        </div>
        <CommentInput onSubmit={handleNewComment} />
      </div>
    </>
  );
};

export default ProductInquiry;
