const User = require("../user/user.model");
const { findByIdAndUpdate } = require("./project.model");
const Project = require("./project.model");
const Post = require("../post/post.model");

module.exports = {
  async listAllProjects(req, res) {
    try {
      const projects = await Project.find().populate(
        "posts"
      ); /* .select("-_id") */

      res.status(200).json({ message: "✅ projects found", info: projects });
    } catch (error) {
      res
        .status(404)
        .json({ message: "❌ No projects found", error: error.message });
    }
  },

  async listSingleProject(req, res) {
    try {
      const user = req.user;
      const id = req.body._id;

      if (!user) {
        throw new Error("no user authorized");
      }

      const project = await Project.findById(id).populate("posts");

      if (project === null) {
        throw new Error(`No project matches the id`);
      }

      res.status(200).json({ message: "✅ project found", info: project });
    } catch (error) {
      res
        .status(404)
        .json({ message: "❌ No project found", info: error.message });
    }
  },

  async createProject(req, res) {
    try {
      const user = req.user;
      const { title, description, category } = req.body;

      if (!title) {
        throw new Error("title needed");
      }
      if (!description) {
        throw new Error("description needed");
      }
      if (!category) {
        throw new Error("category needed");
      }

      const project = await Project.create({
        ...req.body,
        projectAuthor: user,
      });

      const userToUpdate = await User.findById(user);
      const projectId = await Project.findById(project._id);
      userToUpdate.projects.unshift(projectId);
      userToUpdate.save();

      res.status(201).json({ message: "✅ project created", info: project });
    } catch (error) {
      res.status(400).json({
        message: "❌ project could NOT be created",
        error: error.message,
      });
    }
  },

  async updateProject(req, res) {
    try {
      const project = await Project.findById(req.params.id);
      const data = req.body;

      if (!project) {
        throw new Error("no project found with the id for project update");
      }

      updatedProject = await Project.findByIdAndUpdate(project, data, {
        new: true,
      });

      res
        .status(200)
        .json({ message: "✅ modified project", info: updatedProject });
    } catch (error) {
      res.status(400).json({
        message: "❌ project could not be modified ",
        error: error.message,
      });
    }
  },

  async deleteProject(req, res) {
    try {
      const user = await User.findById(req.user);
      const project = await Project.findById(req.params.id);
      const userId = user.id;
      const projectId = project.id

      if (user === null) {
        throw new Error(`No user matches the id`);
      }
      if (!project) {
        throw new Error(`No project matches the id`);
      }
      if (userId.toString() !== project.projectAuthor.toString()) {
        throw new Error("Unauthorized to delete this project");
      }

      function removeItemOnce(arr, value) {
        const index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }

      removeItemOnce(user.projects, projectId);
      user.save()

      await Project.deleteOne({ _id: projectId });

      res
        .status(200)
        .json({ message: "✅ user delete succesfull", info:project });
    } catch (error) {
      res.status(400).json({
        message: "❌ user could Not be deleted",
        error: error.message,
      });
    }
  },
};
