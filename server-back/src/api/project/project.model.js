const { model, Schema, models } = require("mongoose");
const User = require('../user/user.model');
const Post = require('../comment/comment.model')

const projectsSchema = new Schema(
  {
    projectAuthor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      lowercase: true
    },
    posts:[
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ],
    likeRate :{
      type: Number,
      default: 0,
      //minimo
    },
  },
  { timestamps: true }
);

const Project = model("Project", projectsSchema);

module.exports = Project;
