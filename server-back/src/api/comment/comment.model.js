const { model, Schema, models } = require("mongoose");

const commentSchema = new Schema(
  {
    commentAuthor:{
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentOfPost: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
