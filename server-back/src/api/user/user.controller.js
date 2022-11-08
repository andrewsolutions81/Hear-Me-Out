const User = require('./user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  async listAllUsers(req, res) {
    try {
      const users = await User.find()/* .populate('favList') */.select('-password')

      res.status(200).json({ message:"✅ users found", info:users})
    } catch (error) {
      res.status(404).json({ message:"❌ No users found", info:error.message})
    }
  },

  async listSingleUser(req, res) {
    try {
      const id = req.body._id
      const user = await User.findById(id)/* .populate('favList') */.select('-_id -password')

      if(user === null){
        throw new Error(`No user matches the id`)
      }

      res.status(200).json({ message:"✅ user found", info:user})
    } catch (error) {
      res.status(404).json({ message:"❌ No user found", info:error.message})
    }
  },

  async signup (req, res) {
    try {
      const { name, lastName, userName, email, password } = req.body

      if(!userName){
        throw new Error("userName needed")
      }
      if(!email){
        throw new Error("Email needed")
      }
      if(!password){
        throw new Error("Password needed")
      }

      const encriptedPassord = await bcrypt.hash(password, 11)
      const user = await User.create({ name, lastName, userName, email, password:encriptedPassord })

      const token  = jwt.sign(
        { id: user._id},
        process.env.SECRET_KEY_JWT,
        { expiresIn: 60 * 60 * 24}//one day
      )

      res.status(201).json({ message: "✅user created", data: { token, email, userName} })
    } catch (error) {
      res.status(400).json({ message: "❌user could NOT be created", error:error.message})
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if(!user){
        throw new Error(`invalid credentials`)
      }

      const isValid = await bcrypt.compare( password, user.password);

      if(!isValid){
        throw new Error(`invalid credentials`)
      }

      const token  = jwt.sign(
        { id: user._id},
        process.env.SECRET_KEY_JWT,
        { expiresIn: 60 * 60 * 24}
      )
      const {userName,avatar, role, rank, } = user
      res.status(200).json({ message: "✅user logged in", info:{token, userName, email, avatar, role, rank, }})
    } catch (error) {
      res.status(400).json({message:"❌ user could not login", error:error.message})
    }
  },


  async updateUser(req, res) {
    try {
      const user = await User.findById(req.user)
      const data = req.body

      if(!user){
        throw new Error("Token expired")
      }

      updatedUser = await User.findByIdAndUpdate(user, data, { new: true } )

      res.status(200).json({  message: "✅user modify", info:updatedUser})
    } catch (error) {
      res.status(400).json({ message: "❌user could not be modified ", error:error.message })
    }
  },

  async deleteUser(req, res) {
    try {
      const id = req.body._id;

      const user = await User.findById(id);
      if(user === null){
        throw new Error(`No user matches the id`)
      }

      await User.deleteOne({ _id:id });

      const deletedUser = await User.findById(id);
      console.log("🚀 ~ file: user.controller.js ~ line 106 ~ deleteUser ~ deletedUser", deletedUser)

      res.status(200).json({message:"✅user delete succesfull", info:user})
    } catch (error) {
      res.status(400).json({ message: "❌user could Not be deleted", error:error.message })
    }
  }

}
