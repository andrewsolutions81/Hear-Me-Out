const { model, Schema, models } = require("mongoose");

const postSchema = new Schema(
  {
    postAuthor:{
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project:{
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    description :{
      type: String,
      required: true
    },
    media: [
      {
        postImage: {
          type: String,
        },
        postVideo: {
          type: String,
        },
        postThumbnail: {
          type: String,
        },
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      }
    ],
    likeRate :{
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
