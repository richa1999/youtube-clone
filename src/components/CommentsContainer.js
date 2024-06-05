import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
  name: "John Doe",
  comment: "I love this video!",
  replies: [
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: [
        {
          name: "John Doe",
          comment: "I love this video!",
          replies: [
            {
              name: "Jane Doe",
              comment: "Me too!",
              replies: [ 
                {
                  name: "Jane Doe",
                  comment: "Me too!",
                  replies: [
                    {
                      name: "Jane Doe",
                      comment: "Me too!",
                      replies: []
                    },
                  ]
                },
              ]
            },
          ],
        },
      ],
    },
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: [
        {
          name: "Jane Doe",
          comment: "Me too!",
        },
      ]
    },
    {
      name: "Jane Doe",
      comment: "Me too!",
    },
  ],
},{
  name: "John Doe",
  comment: "I love this video!",
  replies: [
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: []
    },
  ],
},
{
  name: "John Doe",
  comment: "I love this video!",
  replies: [
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: []
    },
  ],
},{
  name: "John Doe",
  comment: "I love this video!",
  replies: [
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: []
    },
  ],
},{
  name: "John Doe",
  comment: "I love this video!",
  replies: [
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: []
    },
  ],
},{
  name: "John Doe",
  comment: "I love this video!",
  replies: [
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: []
    },
  ],
},{
  name: "John Doe",
  comment: "I love this video!",
  replies: [
    {
      name: "Jane Doe",
      comment: "Me too!",
      replies: []
    },
  ],
}
]
const CommentsContainer = () => {
  return <div className="p-2 m-5">
    <h1 className="text-xl font-bold">Comments:</h1>
    <CommentsList comments={commentsData} />
    </div>;
};

export default CommentsContainer;
