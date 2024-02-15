import React from "react";
import CommentList from "./CommentList";
import { mockCommentData } from "../utils/helper";

const CommentsContainer = () => {
  return (
    <div>
      <h3 className="mt-16 font-bold text-lg">Comments</h3>
      <CommentList comments={mockCommentData} />
    </div>
  );
};

export default CommentsContainer;
