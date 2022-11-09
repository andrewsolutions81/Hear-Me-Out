const { model, Schema, models } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "already taken"],
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxLenght: 27,
    },
    avatar: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin", "buisness"],
      default: "user",
    },
    rank: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    payment: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;
