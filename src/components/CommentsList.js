import React from "react";

const Comments = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comments data={comment} />
          {comment.replies?.length > 0 && (
            <div className="pl-5 border-l border-gray-400 ml-5">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
