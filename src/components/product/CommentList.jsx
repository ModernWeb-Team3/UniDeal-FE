import CommentItem from './CommentItem';

const CommentList = ({ comments, currentUserId, postOwnerId }) => {
  return (
    <div style={{ padding: '12px' }}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          currentUserId={currentUserId}
          postOwnerId={postOwnerId}
        />
      ))}
    </div>
  );
};

export default CommentList;
