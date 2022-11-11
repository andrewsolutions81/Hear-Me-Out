const Post = require("./post.model");
const User = require("../user/user.model");
const Project = require("../project/project.model");

module.exports = {
  async listAllPosts(req, res) {
    try {
      const posts = await Post.find()/* .select("-_id") */

      res.status(200).json({ message: "✅ posts found", info: posts });
    } catch (error) {
      res
        .status(404)
        .json({ message: "❌ No posts found", error: error.message });
    }
  },

  async listSinglePost(req, res) {
    try {
      const user = req.user;
     const postId = req.body._id;

      if (!user) {
        throw new Error("no user authorized");
      }

      const post = await Post.findById(postId);

      if (post === null) {
        throw new Error(`No post matches the id`);
      }

      res.status(200).json({ message: "✅ post found", info: post });
    } catch (error) {
      res
        .status(404)
        .json({ message: "❌ No post found", error: error.message });
    }
  },

  async createPost(req, res) {
    try {
      const userId = req.user;
      const projectId = req.params.id
      const { description, category, media } = req.body;

      if (!description) {
        throw new Error("description needed");
      }


      const post = await Post.create({
        ...req.body,
        postAuthor: userId,
        inProject: projectId,
      });

      const projectToUpdate = await Project.findById(projectId)
      const postId = await Post.findById(post.id)
      projectToUpdate.posts.unshift(postId)
      projectToUpdate.save()

      res.status(201).json({ message: "✅ post created", info: post });
    } catch (error) {
      res.status(400).json({
        message: "❌ post could NOT be created",
        error: error.message,
      });
    }
  },

  async updatePost(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      const data = req.body;

      if (!post) {
        throw new Error("no post found with the id for project update");
      }

      updatedPost = await Post.findByIdAndUpdate(post, data, {
        new: true,
      });

      res
        .status(200)
        .json({ message: "✅ modified post", info: updatedPost });
    } catch (error) {
      res.status(400).json({
        message: "❌ post could not be modified ",
        error: error.message,
      });
    }
  },

  async deletePost(req, res) {
    try {
      const user = await User.findById(req.user);
      const userId = user.id;
      const post = await Post.findById(req.params.id);
      const postId = post.id
      const project = await Project.findById(post.inProject)
      const projectId = project._id.valueOf()

      if (user === null) {
        throw new Error(`No user matches the id`);
      }
      if (!post) {
        throw new Error(`Any post matches the id`);
      }
      if (userId.toString() !== post.postAuthor.toString()) {
        throw new Error("Unauthorized to delete this project");
      }

      function removeItemOnce(arr, value) {
        const index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }

      removeItemOnce(project.posts, postId);
      project.save()

      await Post.deleteOne({ _id: postId });
      res
        .status(200)
        .json({ message: "✅ succesfull post delete ", info:post,project });
    } catch (error) {
      res.status(400).json({
        message: "❌ post could Not be deleted ",
        error: error.message,
      });
    }
  },
};
