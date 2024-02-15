import React from "react";
import Comment from "./Comment";
const CommentList = ({ comments }) => {
  console.log("COMMENTS", comments);
  return (
    <div>
      {comments &&
        comments.map((comment, index) => (
          <div key={index}>
            <div>
              <Comment commentData={comment} />
            </div>
            <div className="ml-6 border border-l-black">
              <CommentList comments={comment?.replies} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
