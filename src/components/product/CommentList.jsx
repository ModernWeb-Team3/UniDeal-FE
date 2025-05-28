import CommentItem from './CommentItem';

const CommentList = ({ comments, currentUserId, postOwnerId, replyTo, setReplyTo, onDelete }) => {
  return (
    <div style={{ padding: '12px' }}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          currentUserId={currentUserId}
          postOwnerId={postOwnerId}
          replyTo={replyTo}
          setReplyTo={setReplyTo}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CommentList;
