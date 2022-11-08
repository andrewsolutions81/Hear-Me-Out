const { model, Schema, models } = require("mongoose");

const projectsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      lowercase: true
    },
    posts:[
      {
      media: [
        postImage: {
          type: String,
        },
        postVideo: {
          type: String,
        },
        postThumbnail: {
          type: String,
        },

      ],
    }],
  },
  { timestamps: true }
);

const Project = model("Project", projectsSchema);

module.exports = Project;
